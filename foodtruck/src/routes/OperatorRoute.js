import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Operator from '../Components/Operator'

export default function OperatorRoute() {
  return (
    <Switch>
      <Route
        exact
        path='/app/operator'
        render={props => <Operator {...props} />}
      />
    </Switch>
  )
}