export const VisiblePages = {
  TRUCK_OWNED: 'Truck Owned',
  ADD_TRUCK: 'Add Truck',
  DELETE_TRUCK: 'Delele Truck',
  EDIT_TRUCK: 'Edit Truck'
}

export const setPage = page => {
  return {
    type: 'SET_PAGE',
    payload: page
  }
}