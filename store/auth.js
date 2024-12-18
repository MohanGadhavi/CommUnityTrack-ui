// store/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload; // Set user details
      state.isAuthenticated = true; // Mark as logged in
    },
    logout: (state) => {
      state.user = null; // Clear user data
      state.isAuthenticated = false; // Mark as logged out
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
