import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Barer ${token}`;
};
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = ``;
};
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      const res = await axios.post('users/singup', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const singIn = createAsyncThunk(
  'auth/singIn',
  async (credentials, thunkApi) => {
    try {
      const res = await axios.post('/users/login', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const singOut = createAsyncThunk('auth,singOut', async (_, thunkApi) => {
  try {
    await axios.post('users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});
export const refreshUser = createAsyncThunk( 
  'auth/refresh',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const { token } = state?.auth || {};
    if (!token) return thunkApi.rejectWithValue('Unable to fetch');
    setAuthHeader(token);
    try {
      const res = await axios.get('users/current');
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
