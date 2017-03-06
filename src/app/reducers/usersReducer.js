let initialState = {
  data: null
};

export default function usersReducer(state = initialState, action = {}) {
  switch(action.type) {
    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        data: action.result
      };
    case 'FETCH_USERS_FAIL':
      return {
        ...state,
        error: action.result
      }
    default: 
      return state;
  }
}