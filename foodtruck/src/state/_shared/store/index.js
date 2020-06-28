import { createStore, applyMiddleware } from "redux";
import rootReducer from '../../reducers';
import thunk from 'redux-thunk';

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

export const store = createStore(rootReducer, initialState, applyMiddleware(thunk));