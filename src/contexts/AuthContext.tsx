import firebase from 'firebase';

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { auth, githubProvider, googleProvider } from '../config/firebase';

interface AuthContextData {
  user: firebase.User | null;
  signInWithGoogle: () => Promise<firebase.auth.UserCredential>;
  signInWithGithub: () => Promise<firebase.auth.UserCredential>;
  signInWithEmailAndPassword: (
    email: string,
    password: string
  ) => Promise<firebase.auth.UserCredential>;
}

export const AuthContext = createContext({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signInWithGoogle = () => {
    return auth.signInWithPopup(googleProvider);
  };

  const signInWithEmailAndPassword = (email: string, password: string) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const signInWithGithub = () => {
    return auth.signInWithPopup(githubProvider);
  };

  useEffect(() => {
    const unsubscriber = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscriber;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signInWithEmailAndPassword,
        signInWithGoogle,
        signInWithGithub,
      }}
    >
      {loading || children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
