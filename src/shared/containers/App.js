import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './Main';

const App = ({initialData}) => {
  const urlParams = initialData.reqUrl ? initialData.reqUrl : "";
  return (
    <>
        <Switch>
          <Route exact path="/" render={(routeProps) => <Main 
          routeProps={routeProps} launchData={initialData.launchData} urlParams={routeProps.location.key?"":urlParams}/>}
          />
          <Route path="/:id" render={(routeProps) => <Main 
          routeProps={routeProps} launchData={initialData.launchData} urlParams={urlParams}/>}
          />
        </Switch>
    </>
  )
}

export default App
