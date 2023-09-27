import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'users',
  initialState: {
    email: '',
    password: '',
  },
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    removeUser(state) {
      state.email = '';
      state.password = '';
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export const user = userSlice.reducer;