import React, {useState, useCallback} from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import UpdatePlace from './places/pages/UpdatePlace';
import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';
import UserPlace from './places/pages/UserPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation'
import Auth from './users/pages/Auth';
import {AuthContext} from './shared/context/auth-context';

const dotenv = require('dotenv');

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if(isLoggedIn) {
    routes = (
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
        <Redirect to="/"/>
    </Switch>
    );
   } else {
    routes = (
      <Switch>
        <Route exact path="/">
          <Users />
        </Route>
        <Route exact path="/:userId/places">
          <UserPlace />
        </Route>
        <Route exact path="/auth">
           <Auth />
        </Route>
          <Redirect to="/auth"/>
      </Switch>
    );
   }



  return (
// Router is used to give the app a multi-page feel, althought it is still a SPA.
// Switch allows us to go to different pages without us redirecting since the code gets rendered from top to bottom.
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn, login: login, logout: logout}}>
      <Router>
        <MainNavigation />
        <main>
            {routes}
        </main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
