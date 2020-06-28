import { PostTruck, GetAllTrucks, RemoveTruck, UpdateTruck } from '../actions/crudActions';
import { VisiblePages } from '../actions/visibility';

const trucks = (state = {}, action) => {

  switch (action.type) {
    
    // post truck to api
    case PostTruck.FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case PostTruck.FETCH_SUCCESS:
      return {
        ...state,
        visiblePage: VisiblePages.TRUCK_OWNED,
        isFetching: false,
        error: ''
      };
    case PostTruck.FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    // get trucks from api
    case GetAllTrucks.FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case GetAllTrucks.FETCH_SUCCESS:
      return {
        ...state,
        truckOwned: action.payload.truckOwned,
        isFetching: false,
        error: ''
      };
    case GetAllTrucks.FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    // delete truck at api
    case RemoveTruck.FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case RemoveTruck.FETCH_SUCCESS:
      return {
        ...state,
        visiblePage: VisiblePages.TRUCK_OWNED,
        isFetching: false,
        error: ''
      };
    case RemoveTruck.FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    // put truck to api
    case UpdateTruck.FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case UpdateTruck.FETCH_SUCCESS:
      return {
        ...state,
        visiblePage: VisiblePages.TRUCK_OWNED,
        isFetching: false,
        error: ''
      };
    case UpdateTruck.FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    
    // show page
    case 'SET_PAGE':
      return {
        ...state,
        visiblePage: action.payload.name,
        activeTruck: action.payload.truckId
      }
    
    // default state if there is no action type
    default:
      return state;
      
  }
  
}


export default trucks;