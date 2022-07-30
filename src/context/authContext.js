import { createContext, useContext, useEffect, useState } from 'react';
import {
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  provider,
  signInWithPopup,
} from '../firebase-controler/firebase';
export const authContext = createContext();
export const useAuth = () => {
  const context = useContext(authContext);
  return context;
};
// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);
  const logout = () => signOut(auth);
  const loginGoogle = () => signInWithPopup(auth, provider);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  return (
    <authContext.Provider
      value={{ signup, login, user, logout, loading, loginGoogle }}
    >
      {children}
    </authContext.Provider>
  );
}