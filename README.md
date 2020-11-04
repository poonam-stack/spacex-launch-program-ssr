View Demo - https://spacex-launch-program-ssr.herokuapp.com/

# Spacex Launch Program App

SpaceX Launch Programs - Project to demonstrate Server Side Rendering using React, Node.js and Express.

This is a sample frontend application to list and browse all launches by SpaceX program.

The initial launch Program landing page is Server-side Rendered.

Server Side rendering means rendering React components on the Server and sending HTML pages pre-populated with components to the client - This can lead to a better user experience and Search Engine discoverability.

On the browser, when the javascript runs, react will realize that the component is already there and take over for front-end interactivity, skipping the initial render. 

# Technical Details

- Creation of React components using latest feature react hooks. 

- Creation of node server using Express to render the content for initial request

- Data Fetching on the Server using isomorphic-fetch npm package

- Use of Webpack and Babel Scripts for bundling and transpilling.

- Use of Media Queries to create fully responsive UI for Mobile, Tablet and Desktop views.

- Using react-loadable for code splitting and for srever using react-loadable-ssr-addon to identify and load automatically the assets.

- Using travis for CI and deploying to Heroku Server.

# Responsive Design

- Mobile View - Page is having one column until 700px.
![mobileView](https://user-images.githubusercontent.com/51441748/97817318-9b051700-1cc1-11eb-996a-5aff4fd5e69a.png)

- Tablet View - Page is having 2 columns between 700 and 1024px.
![tabletView](https://user-images.githubusercontent.com/51441748/97817319-9b9dad80-1cc1-11eb-86dd-55bbd0a60ca9.png)

- Desktop View - Page ia having 4 columns between 1024 and 1440px.
![desktopView](https://user-images.githubusercontent.com/51441748/97817315-98a2bd00-1cc1-11eb-9a4b-f1b4f35bcceb.png)


# To get started

- Install NodeJS
- Download this repo.
- Open the command line of your choice and cd to a sample directory within this repo on your machine.
- npm install - Installs the relevant packages as defined in the package.json file. This step helps to get all the dependencies of the project.
- npm start | npm run start - Creates a build-in development and provides an Express server which should have been started by now.
- Check for informational console message on the server to ensure that all the dependencies are properly installed and the server is up and running.
- Navigate to http://localhost:3001/, and find the app running.


# Lighthouse Score
- on Localhost:
![lighthouseScore-localhost-1](https://user-images.githubusercontent.com/51441748/97817340-c425a780-1cc1-11eb-939a-31b0e4ac4f45.png)

- on Localhost with selections
![lighthouse-WithSelection](https://user-images.githubusercontent.com/51441748/97817298-6db86900-1cc1-11eb-8cc5-7ba1f312b610.png)

- on Heroku
![lighthouseRes_Heroku](https://user-images.githubusercontent.com/51441748/97817317-9a6c8080-1cc1-11eb-8ba6-f0c9c0fc0d2d.png)

-on Heroku with Selection
![lighthouse-heroku1](https://user-images.githubusercontent.com/51441748/97817316-9a6c8080-1cc1-11eb-825e-817ab48d4f56.png)

Onservation on Lighthouse score - It varied based on internet speed as well. But at all points remained in 90s line.
