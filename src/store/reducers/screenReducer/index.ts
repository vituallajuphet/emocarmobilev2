import { createSlice } from '@reduxjs/toolkit'

export const screenReducer = createSlice({
  name: 'screenstate',
  initialState: {
    started: false,
    isLoggedin: false
  },
  reducers: {
    startApp: (state, action) => {
      state.started = action.payload;
    },
  },
});

export const { startApp } = screenReducer.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const screenState = (state) => state.screenstate.started;

export default screenReducer.reducer;
