import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import UpdatePlace from './places/pages/UpdatePlace';
import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';
import UserPlace from './places/pages/UserPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation'
import Auth from './users/pages/Auth';

const App = () => {
  return (
// Router is used to give the app a multi-page feel, althought it is still a SPA.
// Switch allows us to go to different pages without us redirecting since the code gets rendered from top to bottom.

<Router>
    <MainNavigation />
    <main>
      <Switch>
        <Route exact path="/">
          <Users />
        </Route>
        <Route exact path="/:userId/places">
          <UserPlace />
        </Route>
        <Route exact path="/places/new">
          <NewPlace />
        </Route>
        <Route exact path="/places/:placeId">
          <UpdatePlace />
        </Route>
        <Route exact path="/auth">
          <Auth></Auth>
        </Route>
        <Redirect to="/"/>
        </Switch>
    </main>
  </Router>
  );
}

export default App;
