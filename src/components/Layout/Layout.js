import { Outlet, useNavigate } from 'react-router-dom';
import css from './Layout.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/AuthThunk';
import { selectIsLoggedIn } from 'redux/auth/AuthSelectors';

export const Layout = () => {
  const isAuthorized = useSelector(selectIsLoggedIn);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => dispatch(logOut());

  return (
    <main className={css.container}>
      <nav className={css.nav}>
        {!isAuthorized && (
          <>
            <button onClick={() => navigate('sign-in')}>Sign in</button>
            <button onClick={() => navigate('register')}>Register</button>
          </>
        )}
        {isAuthorized && <button onClick={handleSignOut}>Sign out</button>}
      </nav>
      <Outlet />
    </main>
  );
};
