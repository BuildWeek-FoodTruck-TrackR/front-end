export const FetchOperatorLoginType = {
  FETCH_START: 'FETCH_OPERATOR_LOGIN_START',
  FETCH_SUCCESS: 'FETCH_OPERATOR_LOGIN_SUCCESS',
  FETCH_FAIL: 'FETCH_OPERATOR_LOGIN_FAIL'
}

export const setId = id => {
  return {
    type: 'SET_ID',
    payload: id
  }
}