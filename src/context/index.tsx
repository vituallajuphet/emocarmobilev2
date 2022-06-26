import React, {useReducer} from 'react';
import {createContext} from 'react';
import combineReducers from 'react-combine-reducers';
import {authReducer, codeReducer} from './reducers';

export const Context = createContext(null);

const initialState = {
  user: {
    isLoggedIn: false,
  },
};
const intialCodeState = {
  code: {
    codekey: '',
  },
};

export const Provider: React.FC<any> = ({children}) => {
  const [reducers, inititialStates] = combineReducers({
    user: [authReducer, initialState],
    code: [codeReducer, intialCodeState],
  });

  const [state, dispatch] = useReducer(reducers, inititialStates);

  return (
    <Context.Provider value={{state, dispatch}}>
      {children}
    </Context.Provider>
  );
};
