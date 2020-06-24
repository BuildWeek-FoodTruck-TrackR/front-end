import { combineReducers } from 'redux';

import truckList from './truckList';
import user from './user';

const rootReducer = combineReducers({
  user,
  truckList
});

export default rootReducer;