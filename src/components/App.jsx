import { loadContacts } from 'MockStorageHandlers/MockStorageHandlers';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Register } from '../pages/Register';
import { SignIn } from '../pages/Login';
import { Home } from '../pages/Home';
import { Layout } from './Layout/Layout';
import { useAuth } from '../hook/hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ProtectedRoute } from './Route/ProtectedRoute';
import { RestrictedRoute } from './Route/RestrictedRoute';
import { ContactsPage } from 'pages/Contacts';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(loadContacts());
  }, [dispatch]);
  return isRefreshing ? (
    <div>Loading</div>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={<RestrictedRoute component={<Register />} />}
        />
        <Route
          path="/sign-in"
          element={<RestrictedRoute component={<SignIn />} />}
        />
        <Route
          path="/contacts"
          element={
            <ProtectedRoute
              component={<ContactsPage />}
              redirectTo={'/sign-in'}
            />
          }
        />
      </Route>
    </Routes>
  );
};
