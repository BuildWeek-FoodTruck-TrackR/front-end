import { axiosWithAuth } from './axiosAuth';

export const BASE_API_URL = "https://foodtrucktrackrr.herokuapp.com/";

function parseJwt(token) {
  if (!token) { return; }
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
}

// POST action to send users' username and password to get a JWT.
export const postLogin = (credentials, fetchAction, pathname) => dispatch => {
  dispatch({ type: fetchAction.FETCH_START });
  axiosWithAuth()
    .post(BASE_API_URL + pathname, credentials)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('operator_id', parseJwt(res.data.token).userId)
      dispatch({ type: fetchAction.FETCH_SUCCESS, payload: res.data })
    })
    .catch(err => dispatch({ type: fetchAction.FETCH_FAIL, payload: err.response }));
}

// GET action
export const getData = (pathname, search, fetchAction) => dispatch => {
  dispatch({ type: fetchAction.FETCH_START });
  axiosWithAuth()
    .get(BASE_API_URL + pathname + search)
    .then(res =>
      dispatch({ type: fetchAction.FETCH_SUCCESS, payload: res.data })
    )
    .catch(err => dispatch({ type: fetchAction.FETCH_FAIL, payload: err.response }));
};

// POST action
export const postData = (pathname, reqBody, fetchAction) => dispatch => {
  dispatch({ type: fetchAction.FETCH_START });
  axiosWithAuth()
    .post(BASE_API_URL + pathname, reqBody)
    .then(res =>
      dispatch({ type: fetchAction.FETCH_SUCCESS, payload: res.data })
    )
    .catch(err => dispatch({ type: fetchAction.FETCH_FAIL, payload: err.response }));
};

// PATCH action
export const putData = (pathname, reqBody, fetchAction) => dispatch => {
  dispatch({ type: fetchAction.FETCH_START });
  axiosWithAuth()
    .put(BASE_API_URL + pathname, reqBody)
    .then(res =>
      dispatch({ type: fetchAction.FETCH_SUCCESS, payload: res.data })
    )
    .catch(err => dispatch({ type: fetchAction.FETCH_FAIL, payload: err.response }));
};

// DELETE action
export const deleteData = (pathname, fetchAction) => dispatch => {
  dispatch({ type: fetchAction.FETCH_START });
  axiosWithAuth()
    .delete(BASE_API_URL + pathname)
    .then(res =>
      dispatch({ type: fetchAction.FETCH_SUCCESS, payload: res.data })
    )
    .catch(err => dispatch({ type: fetchAction.FETCH_FAIL, payload: err.response }));
};