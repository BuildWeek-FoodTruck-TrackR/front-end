import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';

import './index.css';

import { Provider } from 'react-redux';
import { store } from './state/_shared/store';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';

import App from './App';
import Operators from './operator/Operators';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <PrivateRoute
          path="/operators"
          component={Operators}
        />
        <Route
          path="/"
          component={App}
        />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
