import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import { Link } from './LayoutStyled.js';
export const AuthNav = () => {
  return (
    <div>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </div>
  );
};
