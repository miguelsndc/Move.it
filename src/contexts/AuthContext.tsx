import firebase from 'firebase';
import { useRouter } from 'next/router';

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
  registerWithEmailAndPassword: (
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
  const router = useRouter();

  const registerWithEmailAndPassword = async (
    email: string,
    password: string,
    name: string
  ) => {
    const credentials = await auth.createUserWithEmailAndPassword(
      email,
      password
    );

    addUserToDatabase(credentials, name);
  };

  const addUserToDatabase = (
    credentials: firebase.auth.UserCredential,
    name: string
  ) => {
    const { uid } = credentials.user;

    db.collection('users').doc(uid).set({
      name,
      Level: 1,
      CurrentExperience: 0,
      ChallengesCompleted: 0,
      PhotoUrl: '',
    });

    router.push(`/`);
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
        registerWithEmailAndPassword,
      }}
    >
      {loading || children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
