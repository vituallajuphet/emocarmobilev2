import {configureStore} from '@reduxjs/toolkit';
import screenReducer from './reducers/screenReducer/';
import userReducer from './reducers/userReducer/';

export default configureStore({
  reducer: {
    screenstate: screenReducer,
    userstate: userReducer,
  },
});
