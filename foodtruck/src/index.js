import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';

import './index.css';

import { Provider } from 'react-redux';
import { store } from './state/_shared/store';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';

import App from './App';
import LoginForm from './Components/LoginForm';
import SignupForm from './Components/SignupForm';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <PrivateRoute
          path="/app"
          component={App}
        />
        <Route
          exact
          path="/login"
          component={LoginForm}
        />
        <Route
          exact
          path="/signup"
          component={SignupForm}
        />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);