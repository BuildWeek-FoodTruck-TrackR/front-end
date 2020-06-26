import { FetchOperatorLoginType } from '../actions/operatorLogin';

const operator = (state = {}, action) => {

  switch (action.type) {
    
    // get customers from api
    case FetchOperatorLoginType.FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FetchOperatorLoginType.FETCH_SUCCESS:
      return {
        ...state,
        operator_id: action.payload.operator_id,
        isFetching: false,
        error: ''
      };
    case FetchOperatorLoginType.FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    
    // default state if there is no action type
    default:
      return state;
      
  }
  
}

export default operator;

