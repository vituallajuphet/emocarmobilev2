import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import NetInfo from '@react-native-community/netinfo';

export const checkNetConnection = createAsyncThunk(
  'screenstate/checkNetConnection',
  async data => {
    try {
      return await NetInfo.fetch().then(res => {
        return {type: res.type.toString(), connected: res.isConnected};
      });
    } catch (error) {
      return {type: "", connected: false};
    }
  },
);

export const screenReducer = createSlice({
  name: 'screenstate',
  initialState: {
    started: false,
    isLoggedin: false,
    connection: {
      connected: false,
      type: "",
    },
  },
  reducers: {
    startApp: (state, action) => {
      state.started = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(checkNetConnection.fulfilled, (state, action) => {
      state.connection = action.payload;
    })
    builder.addCase(checkNetConnection.rejected, (state, action) => {
      console.log('rejected');
      return state;
    })
  } ,
});

export const {startApp, checkConnection} = screenReducer.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const screenState = state => state.screenstate.started;
export const connectionState = state => state.screenstate.connection;

export default screenReducer.reducer;
