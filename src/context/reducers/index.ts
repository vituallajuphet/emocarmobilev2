import combineReducers from 'react-combine-reducers';



export function authReducer(state, action) {
  switch (action.type) {
    case 'login':
      return {...state, isLoggedIn: true};
    case 'logout':
      return {...state, isLoggedIn: false};
    default:
      throw new Error();
  }
}

export function codeReducer(state, action) {
  switch (action.type) {
    case 'getCode':
      return {...state, isLoggedIn: true};
    default:
      throw new Error();
  }
}
