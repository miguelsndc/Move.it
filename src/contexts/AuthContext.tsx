import firebase from 'firebase';

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { auth, db } from '../config/firebase';

interface AuthContextData {
  user: firebase.User | null;
  signInWithEmailAndPassword: (
    email: string,
    password: string,
    name: string
  ) => void;
}

export const AuthContext = createContext({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signInWithEmailAndPassword = async (
    email: string,
    password: string,
    name: string
  ) => {
    const credentials = await auth.createUserWithEmailAndPassword(
      email,
      password
    );

    addUserToDatabase(credentials.user.uid, name);
  };

  const addUserToDatabase = (uid: string, name: string) => {
    db.collection('users').doc(uid).set({
      name,
      level: 1,
      currentExperience: 0,
      challengesCompleted: 0,
    });
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
      }}
    >
      {loading || children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
