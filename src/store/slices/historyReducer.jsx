import { createSlice } from '@reduxjs/toolkit';

const historySlice = createSlice({
  name: 'history',
  initialState: {
    history: [],
  },
  reducers: {
    createHistory(state, action) {
      state.history = action.payload;
    },
    addToHistory(state, action) {
      state.history.push(action.payload);
    },
    updateHistory(state, action) {
      state.history.push(action.payload);
    },
    resetHistory(state) {
      state.history = [];
    },
  },
});

export const { createHistory, addToHistory, updateHistory, resetHistory } =
  historySlice.actions;

export const history = historySlice.reducer;
