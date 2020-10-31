import express from "express"
import cors from "cors"
import React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom"
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable-ssr-addon';
import App from '../shared/containers/App'
import getSpacexLaunches from '../shared/apis/fetchLaunches';
import manifest from '../../public/react-loadable-ssr-addon.json';

const app = express();
const port = process.env.PORT || 3001
app.use(cors())
app.use(express.static("public"))
app.get("/", (req, res, next) => {
  let initialData = { reqUrl: req.url }
  let yrIndex = req.url.indexOf('year='), year = null;
  if (yrIndex > -1)
    year = req.url.substring(yrIndex + 1, 6)
  getSpacexLaunches(year, req.url.indexOf('launchSuccess') > -1, req.url.indexOf('landingSuccess') > -1)
    .then((result) => {
      initialData["launchData"] = result.launchData;
      const modules = new Set();
      const markup = renderToString(
        <Loadable.Capture report={moduleName => modules.add(moduleName)}>
          <StaticRouter >
            <App initialData={initialData} />
          </StaticRouter>
        </Loadable.Capture>
      );
      const bundles = getBundles(manifest, [...manifest.entrypoints, ...Array.from(modules)]);
      const styles = bundles.css || [];
      const scripts = bundles.js || [];
      res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="SpaceX Launches SSR Web site"/>
                <title>SpaaceX Launches SSR App</title>
                ${styles.map(style => {
        return `<link href="/${style.file}" rel="stylesheet" />`;
      }).join('\n')}
                <script>window.__INITIAL_DATA__ = ${JSON.stringify(initialData)}</script>
            </head>
            <body>
                <noscript>You need to enable JavaScript to run this app.</noscript>
                <div id="root">${markup}</div>
                ${scripts.map(script => {
        return `<script src="/${script.file}"></script>`
      }).join('\n')}
            </body>
            </html>
            `)
    }).catch(err => {
      console.log({ err });
    });
})
Loadable.preloadAll().then(() => {
  app.listen(port, () => {
    console.log('Running on port '+port);
  });
}).catch(err => {
  console.log(err);
});