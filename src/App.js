import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Users from './users/pages/Users';
import NewPlaces from './places/pages/NewPlaces';

const App = () => {
  return (
// Router is used to give the app a multi-page feel, althought it is still a SPA.
// Switch allows us to go to different pages without us redirecting since the code gets rendered from top to bottom.

<Router>
    <Switch>
      <Route exact path="/">
        <Users />
      </Route>
      <Route exact path="/places/new">
        <NewPlaces />
      </Route>
      <Redirect to="/"/>
      </Switch>
  </Router>
  );
}

export default App;
