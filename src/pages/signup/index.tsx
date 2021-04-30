import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/pages/Signup.module.scss';

import { FormGroup } from '../../components/FormGroup';
import { SignWithProviderButton } from '../../components/SignInWithProvider';
import { useAuth } from '../../contexts/AuthContext';
import useSignUpForm from '../../hooks/useSignUpForm';

export interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export default function SignUp() {
  const {
    signInWithGithub,
    signInWithGoogle,
    signInWithEmailAndPassword,
    user,
  } = useAuth();

  const { register, onSubmit, errors } = useSignUpForm();

  return (
    <>
      <Head>
        <title>Cadastro | Move.it</title>
      </Head>{' '}
      <div className={styles.container}>
        <FormGroup onSubmit={onSubmit}>
          <h1>Cadastrar-se</h1>
          <SignWithProviderButton imagePath="/icons/google.svg">
            Entrar com Google
          </SignWithProviderButton>
          <SignWithProviderButton imagePath="/icons/github.svg">
            Entrar com Google
          </SignWithProviderButton>
          <hr />
          <div>
            <label htmlFor="firstName">Nome</label>
            <input
              type="text"
              {...register('firstName', { required: true })}
              placeholder="Digite seu Nome"
            />
            {errors.firstName && errors.firstName.message}
          </div>
          <div>
            <label htmlFor="lastName">Sobrenome</label>
            <input
              type="text"
              {...register('lastName')}
              placeholder="Digite seu Sobrenome"
            />
            {errors.lastName && errors.lastName.message}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              {...register('email')}
              placeholder="Digite seu E-mail"
            />
            {errors.email && errors.email.message}
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <input
              {...register('password')}
              placeholder="Digite sua senha"
              type="password"
            />
            {errors.password && errors.password.message}
          </div>
          <div>
            <label htmlFor="passwordConfirm">Confirme sua senha</label>
            <input
              placeholder="Confirme sua senha"
              {...register('passwordConfirmation')}
              type="password"
            />
            {errors.passwordConfirmation && errors.passwordConfirmation.message}
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
