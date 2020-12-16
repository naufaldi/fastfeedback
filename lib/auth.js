import React, { useState, useEffect, useContext, createContext } from 'react';

if (!firebase.app.length) {
  firebase.initializeApp(prod);
}

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const signin = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  };
}

export default auth;
