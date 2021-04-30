import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import useSignUpForm from '../../hooks/useSignUpForm';

import { FormGroup, Field } from './styles';
import { Container, ErrorWarning } from '../../styles/pages/Shared';
import { SignWithProviderButton } from '../../components/SignInWithProvider';
import { useAuth } from '../../contexts/AuthContext';

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
      <Container>
        <FormGroup onSubmit={onSubmit}>
          <h1>Cadastrar-se</h1>
          <SignWithProviderButton imagePath="/icons/google.svg">
            Entrar com Google
          </SignWithProviderButton>
          <SignWithProviderButton imagePath="/icons/github.svg">
            Entrar com Google
          </SignWithProviderButton>
          <hr />
          <Field hasErrors={!!errors.firstName}>
            <label htmlFor="firstName">Nome</label>
            <input
              type="text"
              {...register('firstName', { required: true })}
              placeholder="Digite seu Nome"
            />
            {errors.firstName && (
              <ErrorWarning>{errors.firstName.message}</ErrorWarning>
            )}
          </Field>
          <Field hasErrors={!!errors.lastName}>
            <label htmlFor="lastName">Sobrenome</label>
            <input
              type="text"
              {...register('lastName')}
              placeholder="Digite seu Sobrenome"
            />
            {errors.lastName && (
              <ErrorWarning>{errors.lastName.message}</ErrorWarning>
            )}
          </Field>
          <Field hasErrors={!!errors.email}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              {...register('email')}
              placeholder="Digite seu E-mail"
            />
            {errors.email && (
              <ErrorWarning>{errors.email.message}</ErrorWarning>
            )}
          </Field>
          <Field hasErrors={!!errors.password}>
            <label htmlFor="password">Senha</label>
            <input
              {...register('password')}
              placeholder="Digite sua senha"
              type="password"
            />
            {errors.password && (
              <ErrorWarning>{errors.password.message}</ErrorWarning>
            )}
          </Field>
          <Field hasErrors={!!errors.passwordConfirmation}>
            <label htmlFor="passwordConfirm">Confirme sua senha</label>
            <input
              placeholder="Confirme sua senha"
              {...register('passwordConfirmation')}
              type="password"
            />
            {errors.passwordConfirmation && (
              <ErrorWarning>{errors.passwordConfirmation.message}</ErrorWarning>
            )}
          </Field>
          <Field>
            Já tem uma conta ?{' '}
            <Link href="/login">
              <a>Fazer login</a>
            </Link>
          </Field>
          <button type="submit">Cadastrar</button>
        </FormGroup>
      </Container>
    </>
  );
}
