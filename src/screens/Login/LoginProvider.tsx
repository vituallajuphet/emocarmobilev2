import {View, Text} from 'react-native';
import React, {createContext, useReducer} from 'react';
import { SET_STATE, VALIDATE } from './context/action';

export const Context = createContext<any>(null);

const LoginProvider: React.FC<any> = ({children}) => {
  const initialState = {
    contextState: 'loading',
    validation: {
      error: false,
      message: ""
    },
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case SET_STATE:
        return {...state, contextState: action.payload};
      case VALIDATE:
        return {
          ...state,
          validation: {
            error: action.payload.error,
            message: action.payload.message,
          },
        };
    }
  };

  const [state, send] = useReducer(reducer, initialState);

  return <Context.Provider value={{state, send}}>{children}</Context.Provider>;
};
export default LoginProvider;
