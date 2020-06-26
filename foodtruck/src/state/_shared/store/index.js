import { createStore, applyMiddleware } from "redux";
import rootReducer from '../../reducers';
import thunk from 'redux-thunk';

const initialState = {
  operator: {
    operator_id: "",
    username: "",
    isFetching: false,
    error: ""
  }
}

export const store = createStore(rootReducer, initialState, applyMiddleware(thunk));