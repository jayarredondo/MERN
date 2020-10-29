import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Users from './users/pages/Users';
import NewPlaces from './places/pages/NewPlaces';

const App = () => {
  return (
  <Router>
    <Switch>

      <Route exact path="/">
        <Users />
      </Route>
      <Route exact path="/newplaces">
        <NewPlaces />
      </Route>
      <Redirect to="/"/>
      </Switch>
  </Router>
  );
}

export default App;
