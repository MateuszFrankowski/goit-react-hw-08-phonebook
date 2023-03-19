import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  user: { name: null, emamail: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: true,
};
