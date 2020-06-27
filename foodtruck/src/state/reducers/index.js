import { combineReducers } from 'redux';

import operator from './operator';
import trucks from './trucks';

const rootReducer = combineReducers({
  operator,
  trucks
});

export default rootReducer;