import firebase from 'firebase'

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

import { auth, db } from '../config/firebase'

interface AuthContextData {
  user: firebase.User | null
  signupAuthError: string
  loginAuthError: string
  isLoggedIn: boolean
  registerWithEmailAndPassword: (
    email: string,
    password: string,
    name: string
  ) => void
  signOut: () => void
  loginWithEmailAndPassword: (email: string, password: string) => void
}

export const AuthContext = createContext({} as AuthContextData)

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [signupAuthError, setSignupAuthError] = useState<string>(null)
  const [loginAuthError, setLoginAuthError] = useState<string>(null)

  const registerWithEmailAndPassword = async (
    email: string,
    password: string,
    name: string
  ) => {
    try {
      const credentials = await auth.createUserWithEmailAndPassword(
        email,
        password
      )

      addUserToDatabase(credentials, name)
    } catch (error) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          setSignupAuthError('Este email já está em uso.')
          break
        case 'auth/invalid-email':
          setSignupAuthError('Email inválido.')
          break
        default:
          break
      }
    }
  }

  const signOut = async () => {
    try {
      await auth.signOut()
    } catch (e) {
      console.log(e)
    }
  }

  const addUserToDatabase = async (
    credentials: firebase.auth.UserCredential,
    name: string
  ) => {
    const { uid } = credentials.user

    await db.collection('users').doc(uid).set({
      id: uid,
      name,
      level: 1,
      currentExperience: 0,
      challengesCompleted: 0,
      totalExperience: 0,
      photoURL: '',
    })
  }

  const loginWithEmailAndPassword = async (email: string, password: string) => {
    try {
      await auth.signInWithEmailAndPassword(email, password)
    } catch (error) {
      switch (error.code) {
        case 'auth/invalid-email':
          setLoginAuthError('Email inválido')
          break
        case 'auth/user-not-found':
          setLoginAuthError('Usuário não encontrado')
          break
        case 'auth/wrong-password':
          setLoginAuthError('Senha incorreta.')
          break
        default:
          break
      }
    }
  }

  useEffect(() => {
    const unsubscriber = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
        setIsLoggedIn(true)
        setLoading(false)
      } else {
        setUser(null)
        setIsLoggedIn(false)
        setLoading(false)
      }
    })

    return unsubscriber
  }, [])
  return (
    <AuthContext.Provider
      value={{
        user,
        registerWithEmailAndPassword,
        loginWithEmailAndPassword,
        signupAuthError,
        loginAuthError,
        isLoggedIn,
        signOut,
      }}
    >
      {loading || children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
