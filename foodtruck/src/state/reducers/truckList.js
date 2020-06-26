import { FetchTruckList } from '../actions/truckList';

const truckList = (state = {}, action) => {

  switch (action.type) {
    
    // get trucks from api
    case FetchTruckList.FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FetchTruckList.FETCH_SUCCESS:
      return {
        ...state,
        trucks: action.payload.results,
        isFetching: false,
        error: ''
      };
    case FetchTruckList.FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    
    // clean up state
    case 'CLEAN_UP_TRUCK_LIST':
      return {
        ...state,
        customers: [],
        error: '',
        isFetching: false,
      }
    
    // default state if there is no action type
    default:
      return state;
      
  }
  
}

export default truckList;

