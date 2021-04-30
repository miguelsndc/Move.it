import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/pages/Login.module.scss';
import { FormGroup } from '../../components/FormGroup';
import { SignWithProviderButton } from '../../components/SignInWithProvider';
import { InputField } from '../../components/InputField';
import { useAuth } from '../../contexts/AuthContext';

export default function Login() {
  const {
    signInWithGithub,
    signInWithGoogle,
    signInWithEmailAndPassword,
    user,
  } = useAuth();

  return (
    <>
      <Head>
        <title>Login | Move.it</title>
      </Head>{' '}
      <div className={styles.container}>
        <FormGroup>
          <h1>Entrar</h1>
          <SignWithProviderButton imagePath="/icons/google.svg">
            Entrar com Google
          </SignWithProviderButton>
          <SignWithProviderButton imagePath="/icons/github.svg">
            Entrar com Google
          </SignWithProviderButton>
          <hr />
          <div>
            <label htmlFor="email">Email</label>
            <InputField
              type="email"
              name="email"
              placeholder="Digite seu E-mail"
            />
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <InputField
              name="password"
              placeholder="Digite sua senha"
              type="password"
            />
          </div>
          <hr />

          <div>
            Ainda não tem uma conta ?{' '}
            <Link href="/signup">
              <a>Cadastre-se</a>
            </Link>
          </div>
          <button type="submit">Entrar</button>
        </FormGroup>
      </div>
    </>
  );
}
