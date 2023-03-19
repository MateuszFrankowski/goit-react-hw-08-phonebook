import { loadContacts } from 'MockStorageHandlers/MockStorageHandlers';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Register } from '../pages/register';
import { SignIn } from '../pages/sign-in';
import { Home } from '../pages/home';
import { Layout } from './Layout/Layout';
import { useAuth } from '../hook/useAuth/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ProtectedRoute } from './ProtectedRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { ContactsPage } from 'pages/contacts';

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
