import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {userActions} from './actions';
import axios from 'axios';
import {API_POINT} from '../../../config';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

export interface userTypes {
  userdata?: any;
}

const initialState: userTypes = {
  userdata: {}
};

export const loginUser = createAsyncThunk('users/loginUser', async data => {
  
  const resp = await axios.post(API_POINT + 'auth_user', {
    username: data.email,
    password: data.password,
  });
  return resp;
});

export const userReducer = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    default: state => state,
  },
  extraReducers: {
    [loginUser.fulfilled]: (state, action) => {
      console.log("payload", action.payload.data);
      
      return {...state, userdata: action.payload.data}
    },
    [loginUser.rejected]: state => {
      console.log('not');
      state.userdata = {};
    },
  },
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

export default userReducer.reducer;
