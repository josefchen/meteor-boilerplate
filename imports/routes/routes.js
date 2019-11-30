import { Meteor }  from 'meteor/meteor';
import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Signup from '../ui/Signup';
import Dashboard from '../ui/Dashboard';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login'

export const history = createBrowserHistory();


const unauthenticatedPages = [
  '/',
  '/signup'
];

const authenticatedPages = [
  '/dashboard'
];

const onEnterPublicPage = () => {
  if (Meteor.userId()) {
    <Redirect to="/dashboard"/>
  }
}

const onEnterPrivatePage = () => {
  if (!Meteor.userId()) {
    <Redirect to="/"/>
  }
}

export const routes = (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Login} render={onEnterPublicPage}/>
      <Route path="/signup" component={Signup} render={onEnterPublicPage}/>
      <Route path="/dashboard" component={Dashboard} render={onEnterPrivatePage}/>
      <Route component={NotFound}/>
    </Switch>
  </Router>
);

export const onAuthChange = (isAuthenticated) => {
    const pathname = location.pathname;
    const isUnauthenticatedPages = unauthenticatedPages.includes(pathname);
    const isAuthenticatedPages = authenticatedPages.includes(pathname);

    if (isUnauthenticatedPages && isAuthenticated) {
    return history.replace('/dashboard')
    } else if (isAuthenticatedPages && !isAuthenticated) {
    return history.replace('/');
    }
}
