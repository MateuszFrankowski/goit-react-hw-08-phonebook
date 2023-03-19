import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/ContactsSlice';
import { filterReducer } from './filter/FilterSlice';
import { persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist/es/constants';
const myApi = {
  tasks: '/api/contacts',
  filters: 'api/filter',
};
const tasksPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['list'],
};

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'user'],
};

export const Store = configureStore({
  reducer: {
    contacts: persistReducer(authPersistConfig, contactsReducer),
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: { extraArgument: myApi },
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(Store);
