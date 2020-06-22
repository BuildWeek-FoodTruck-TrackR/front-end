import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { Provider } from 'react-redux';
import { store } from './state/_shared/store';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';

import App from './App';
import LoginForm from './Components/LoginForm';

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
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);