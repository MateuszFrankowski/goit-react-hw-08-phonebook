import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/AuthThunk';
import { useAuth } from 'hooks/useAuth.js';
import css from './UserMenu.module.css';
import { Button, AbsoluteCenter, Icon } from '@chakra-ui/react';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <AbsoluteCenter p="2" color="white" axis="both"></AbsoluteCenter>

      <Button
        type="button"
        size="xs"
        onClick={() => dispatch(logOut())}
        rightIcon={
          <Icon viewBox="0 0 24 24" boxSize={5}>
            <path
              fill="currentColor"
              d="M9 20h-4c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h4c0.552 0 1-0.448 1-1s-0.448-1-1-1h-4c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h4c0.552 0 1-0.448 1-1s-0.448-1-1-1zM18.586 11h-9.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h9.586l-3.293 3.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5-5c0.092-0.092 0.166-0.202 0.217-0.324 0.15-0.362 0.078-0.795-0.217-1.090l-5-5c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"
            ></path>
          </Icon>
        }
        colorScheme="teal"
        variant="solid"
      >
        Logout
      </Button>
    </div>
  );
};
