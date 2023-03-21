import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/getContacts,async',
  async (_arg, thunkAPI) => {
    const contacts = thunkAPI.getState.state();
    if (contacts?.length !== 0) return [];
    try {
      const response = await axios.get('/contacts');
      return response.contacts;
    } catch (e) {
      return thunkAPI.rejectWithValue('There was a problem while fetching');
    }
  }
);

export const deleteSelectedContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
export const addNewContact = createAsyncThunk(
  'contacts/addContact',
  async ({ text }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/contacts', { text });

      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
