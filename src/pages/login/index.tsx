import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

export default function LoginPage() {
  const {
    signInWithGithub,
    signInWithGoogle,
    signInWithEmailAndPassword,
    user,
  } = useAuth();

  return <div>Login</div>;
}
