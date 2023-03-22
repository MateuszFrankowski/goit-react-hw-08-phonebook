import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to your phone book app!</h1>
      {/* <FontAwesomeIcon icon="fas fa-address-book" /> */}
      <p>Please sign in or sign up to make your phone contacts list</p>
    </div>
  );
}
