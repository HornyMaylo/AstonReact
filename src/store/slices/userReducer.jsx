import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'users',
  initialState: {
    email: '',
    password: '',
  },
  reducers: {
    setUser(state, action) {
      state.name = action.payload.name;
      state.password = action.payload.password;
    },
    removeUser(state) {
      state.name = '';
      state.password = '';
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export const user = userSlice.reducer;