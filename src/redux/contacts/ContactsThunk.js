import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  loadContacts,
  addContact,
  deleteContact,
} from 'MockStorageHandlers/MockStorageHandlers';
const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const fetchContacts = createAsyncThunk(
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
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [loadContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [loadContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,

    [loadContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
