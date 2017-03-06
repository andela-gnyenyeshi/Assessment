import { combineReducers } from 'redux';
import usersReducer from './usersReducer';

let rootReducer = combineReducers({
  users: usersReducer
});

export default rootReducer;