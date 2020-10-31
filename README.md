# spacex-launch-program-ssr

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

# To get started

- Install NodeJS
- Download this repo.
- Open the command line of your choice and cd to a sample directory within this repo on your machine.
- npm install - Installs the relevant packages as defined in the package.json file. This step helps to get all the dependencies of the project.
- npm start | npm run start - Creates a build-in development and provides an Express server which should have been started by now.
- Check for informational console message on the server to ensure that all the dependencies are properly installed and the server is up and running.
- Navigate to http://localhost:3030/, and find the app running.
