import { combineReducers } from 'redux';

import operator from './operator';
import trucks from './trucks';

const initialState = {
  operator: {
    operator_id: "",
    username: "",
    isFetching: false,
    error: ""
  },
  trucks: {
    truckOwned: [],
    isSuccess: {},
    isFetching: false,
    error: "",
    visiblePage: 'Truck Owned',
    activeTruck: ""
  }
}

const allReducers = combineReducers({
  operator,
  trucks
})

const rootReducer = (state, action) => {
  if (action.type === 'LOG_OUT') {
    state = initialState;
  }

  return allReducers(state, action);
}

export default rootReducer;