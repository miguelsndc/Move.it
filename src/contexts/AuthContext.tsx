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

  const addUserToDatabase = (
    credentials: firebase.auth.UserCredential,
    name: string
  ) => {
    const { uid } = credentials.user

    db.collection('users').doc(uid).set({
      id: uid,
      name,
      Level: 1,
      CurrentExperience: 0,
      ChallengesCompleted: 0,
      PhotoUrl: '',
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
      setUser(user)
      setLoading(false)
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
        signOut,
      }}
    >
      {loading || children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
