import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/AuthSelectors';
import { Heading, Icon } from '@chakra-ui/react';
const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '10px',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  const isLogged = useSelector(selectIsLoggedIn);
  return (
    <div style={styles.container}>
      <Heading size="lg" fontSize="50px">
        Welcome to your phone book app!
      </Heading>
      <Icon viewBox="0 0 32 32" color="red.500" boxSize={20}>
        <path
          fill="currentColor"
          d="M27 17.938v-3h2v3h-2zM27 11h2v3h-2v-3zM27 7h2v3h-2v-3zM24 29h-18c-1.104 0-2-0.896-2-2h0.5c0.828 0 1.5-0.672 1.5-1.5s-0.672-1.5-1.5-1.5h-0.5v-1h0.5c0.828 0 1.5-0.672 1.5-1.5s-0.672-1.5-1.5-1.5h-0.5v-1h0.5c0.828 0 1.5-0.672 1.5-1.5s-0.672-1.5-1.5-1.5h-0.5v-1h0.5c0.828 0 1.5-0.672 1.5-1.5s-0.672-1.5-1.5-1.5h-0.5v-1h0.5c0.828 0 1.5-0.672 1.5-1.5s-0.672-1.5-1.5-1.5h-0.5v-3c0-1.104 0.896-2 2-2h18c0.738 0 1.376 0.404 1.723 1h-19.723c-0.553 0-1 0.447-1 1 0 0.552 0.447 1 1 1h20v21c0 1.104-0.896 2-2 2zM15.5 9.562c-1.208 0-2.188 1.287-2.188 2.875s0.979 2.875 2.188 2.875 2.188-1.287 2.188-2.875-0.98-2.875-2.188-2.875zM18.99 16.688c-0.539-0.359-2.091-0.598-2.091-0.598s-1.006 1.075-1.433 1.075c-0.428 0-1.434-1.075-1.434-1.075s-1.552 0.238-2.090 0.598c-0.539 0.358-0.777 2.261-0.777 2.261h8.615c0.001-0.001-0.157-1.84-0.79-2.261zM5 9.5c0 0.276-0.224 0.5-0.5 0.5h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5zM3.5 13h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5zM3.5 17h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5zM3.5 21h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5zM3.5 25h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5z"
        ></path>
      </Icon>
      {!isLogged && (
        <p>Please sign in or sign up to make your phone contacts list</p>
      )}
    </div>
  );
}
