import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/pages/Signup.module.scss';
import { FormGroup } from '../../components/FormGroup';
import { InputField } from '../../components/InputField';
import { SignWithProviderButton } from '../../components/SignInWithProvider';
import { useAuth } from '../../contexts/AuthContext';

export default function SignUp() {
  const {
    signInWithGithub,
    signInWithGoogle,
    signInWithEmailAndPassword,
    user,
  } = useAuth();

  return (
    <>
      <Head>
        <title>Cadastro | Move.it</title>
      </Head>{' '}
      <div className={styles.container}>
        <FormGroup>
          <h1>Cadastrar-se</h1>
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
          <div>
            <label htmlFor="passwordConfirm">Confirme sua senha</label>
            <InputField
              name="passwordConfirm"
              placeholder="Confirme sua senha"
              type="password"
            />
          </div>
          <div>
            Já tem uma conta ?{' '}
            <Link href="/login">
              <a>Fazer login</a>
            </Link>
          </div>
          <button type="submit">Cadastrar</button>
        </FormGroup>
      </div>
    </>
  );
}
