import { axiosWithAuth } from './axiosAuth';

export const BASE_API_URL = process.env.REACT_APP_BASE_API_URL

// GET action
export const getData = (pathname, search, fetchAction) => dispatch => {
  dispatch({ type: fetchAction.FETCH_START });
  axiosWithAuth()
    .get(pathname + search)
    .then(res =>
      dispatch({ type: fetchAction.FETCH_SUCCESS, payload: res.data })
    )
    .catch(err => dispatch({ type: fetchAction.FETCH_FAIL, payload: err.response }));
};

// POST action
export const postData = (pathname, reqBody, fetchAction) => dispatch => {
  dispatch({ type: fetchAction.FETCH_START });
  axiosWithAuth()
    .post(pathname, reqBody)
    .then(res =>
      dispatch({ type: fetchAction.FETCH_SUCCESS, payload: res.data })
    )
    .catch(err => dispatch({ type: fetchAction.FETCH_FAIL, payload: err.response }));
};

// PATCH action
export const patchData = (pathname, reqBody, fetchAction) => dispatch => {
  dispatch({ type: fetchAction.FETCH_START });
  axiosWithAuth()
    .patch(pathname, reqBody)
    .then(res =>
      dispatch({ type: fetchAction.FETCH_SUCCESS, payload: res.data })
    )
    .catch(err => dispatch({ type: fetchAction.FETCH_FAIL, payload: err.response }));
};

// DELETE action
export const deleteData = (pathname, reqBody, fetchAction) => dispatch => {
  dispatch({ type: fetchAction.FETCH_START });
  axiosWithAuth()
    .delete(pathname, reqBody)
    .then(res =>
      dispatch({ type: fetchAction.FETCH_SUCCESS, payload: res.data })
    )
    .catch(err => dispatch({ type: fetchAction.FETCH_FAIL, payload: err.response }));
};