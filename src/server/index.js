import express from "express"
import cors from "cors"
import React from "react"
import { renderToNodeStream } from "react-dom/server"
import { StaticRouter } from "react-router-dom"
import App from '../shared/containers/App'
import getSpacexLaunches from '../shared/apis/fetchLaunches';

const app = express();
const port = process.env.PORT || 3001
app.use(cors())
app.use(express.static("public"))
app.get("/", (req, res) => {
  let initialData = { reqUrl: req.url }
  let yrIndex = req.url.indexOf('year='), year = null;
  if (yrIndex > -1)
    year = req.url.substring(yrIndex + 1, 6)
  getSpacexLaunches(year, req.url.indexOf('launchSuccess') > -1, req.url.indexOf('landingSuccess') > -1)
    .then((result) => {
      initialData["launchData"] = result.launchData;
      const markup = renderToNodeStream(
          <StaticRouter >
            <App initialData={initialData} />
          </StaticRouter>
      );
      res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="SpaceX Launches SSR Web site"/>
                <title>SpaaceX Launches SSR App</title>
                <link href="/main.css" rel="stylesheet" />
                <script>window.__INITIAL_DATA__ = ${JSON.stringify(initialData)}</script>
                <script src="/bundle.js" defer ></script>
              
            </head>
            <body>
                <noscript>You need to enable JavaScript to run this app.</noscript>
                <div id="root">${markup}</div>
              
            </body>
            </html>
            `)
    }).catch(err => {
      console.log({ err });
    });
})
  app.listen(port, () => {
    console.log('Running on port '+port);
  });