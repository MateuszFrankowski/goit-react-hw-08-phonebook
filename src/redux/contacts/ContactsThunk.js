import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  loadContacts,
  addContact,
  deleteContact,
} from 'MockStorageHandlers/MockStorageHandlers';

export const fetchContacts = createAsyncThunk(
  'contacts/getContacts,async',
  async (_arg, thunkAPI) => {
    const contacts = thunkAPI.getState.state();
    if (contacts?.length !== 0) return [];
    try {
      const response = await loadContacts();
      return response.contacts;
    } catch (e) {
      return thunkAPI.rejectWithValue('There was a problem while fetching');
    }
  }
);

export const deleteSelectedContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const response = await deleteContact(id);

      return id;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
export const addNewContact = createAsyncThunk(
  'contacts/addContact',
  async ({ id, text }, { rejectWithValue }) => {
    try {
      const response = await addContact(text);

      return {
        id,
        text,
        completed: false,
      };
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
