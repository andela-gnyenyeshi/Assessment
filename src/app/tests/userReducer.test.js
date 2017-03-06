import expect from 'expect';
import * as types from '../action/actionTypes.js';
import userReducer from '../reducers/usersReducer';

describe('Tests reducers', function() {
  it('Tests the user reducer', () => {
    let actionPayload = {
      type: types.FETCH_USERS_SUCCESS,
      result: 5
    };
  });
});