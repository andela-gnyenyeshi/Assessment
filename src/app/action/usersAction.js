import * as types from './actionTypes';

function fetchPhpUsersSuccess(data) {
  return {
    type: types.FETCH_USERS_SUCCESS,
    result: data
  };
}

function fetchPhpUsersFail(data) {
  return {
    type: types.FETCH_USERS_FAIL,
    result: data
  };
}
export function fetchPhpUsers() {
  return (dispatch, getState) => {
    fetch(`api/v1/users`)
    .then((response) => response.json())
    .then((data) => { 
      dispatch(fetchPhpUsersSuccess(data.data.items))
    })
    .catch((err) => {
      dispatcj(fetchPhpUsersFail(err));
    })
  }
}