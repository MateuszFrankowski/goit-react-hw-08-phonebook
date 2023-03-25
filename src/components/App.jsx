import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { refreshUser } from 'redux/auth/AuthThunk';
import { Layout } from './Layout/Layout';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ProtectedRoute } from './Route/ProtectedRoute';
import { RestrictedRoute } from './Route/RestrictedRoute';
import { Spinner } from '@chakra-ui/react';

const HomePage = lazy(() => import('../pages/Home').then(x => x.default));
const RegisterPage = lazy(() =>
  import('../pages/Register').then(x => x.default)
);
const LoginPage = lazy(() => import('../pages/Login').then(x => x.default));
const ContactsPage = lazy(() =>
  import('../pages/ContactsUser').then(x => x.default)
);

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <ProtectedRoute
              component={<ContactsPage />}
              redirectTo={'/login'}
            />
          }
        />
      </Route>{' '}
      <Route path="*" element={<p>There's nothing here: 404!</p>} />
    </Routes>
  );
};
