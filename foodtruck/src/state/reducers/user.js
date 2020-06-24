const user = (state = {}, action) => {

  switch (action.type) {
    
    // get role
    case 'SET_USER':
      return {
        ...state,
        id: action.payload.id,
        role: action.payload.role
      };
    
    // default state if there is no action type
    default:
      return state;
      
  }
  
}

export default user;

