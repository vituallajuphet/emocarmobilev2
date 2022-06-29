import {userTypes} from '../index';

const loginUser = (state: userTypes, action: any) => {
  return {
    ...state,
    userdata: action.payload,
  };
};

const logoutUser = (state: userTypes, action: any) => {
    return {
      ...state,
      userdata: action.payload,
    };
  };


export const userActions = {
    loginUser,
    logoutUser
  };
  