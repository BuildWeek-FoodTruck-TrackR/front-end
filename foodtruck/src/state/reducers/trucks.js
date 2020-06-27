import { PostTruck } from '../actions/crudActions';

const trucks = (state = {}, action) => {

  switch (action.type) {
    
    // get customers from api
    case PostTruck.FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case PostTruck.FETCH_SUCCESS:
      return {
        ...state,
        truckOwned: [...state.truckOwned, action.payload],
        isFetching: false,
        error: ''
      };
    case PostTruck.FETCH_FAIL:
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


export default trucks;