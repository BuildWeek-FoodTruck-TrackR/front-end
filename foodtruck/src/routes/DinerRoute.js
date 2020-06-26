import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Diner from '../Components/Diner'

export default function DinerRoute() {
  return (
    <Switch>
      <Route
        exact
        path='/app/diner'
        render={props => <Diner {...props} />}
      />
    </Switch>
  )
}