import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import useLoginForm from '../../hooks/useLoginForm';

import { FormGroup, Field, Container, ErrorWarning } from '../../styles/Form';
import { useAuth } from '../../contexts/AuthContext';

export default function Login() {
  const { register, onSubmit, errors } = useLoginForm();
  const { loginAuthError } = useAuth();

  return (
    <>
      <Head>
        <title>Login | Move.it</title>
      </Head>{' '}
      <Container>
        <FormGroup onSubmit={onSubmit}>
          <h1>Login</h1>
          <hr />
          {loginAuthError && <ErrorWarning>{loginAuthError}</ErrorWarning>}
          <Field hasErrors={!!errors.email}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              {...register('email')}
              placeholder="mail@website.com"
            />
            {errors.email && (
              <ErrorWarning>{errors.email.message}</ErrorWarning>
            )}
          </Field>
          <Field hasErrors={!!errors.password}>
            <label htmlFor="password">Senha</label>
            <input
              {...register('password')}
              placeholder="Min 6 caracteres"
              type="password"
            />
            {errors.password && (
              <ErrorWarning>{errors.password.message}</ErrorWarning>
            )}
          </Field>
          <Field>
            Ainda não tem uma conta ?{' '}
            <Link href="/signup">
              <a>Cadastrar</a>
            </Link>
          </Field>
          <button type="submit">Entrar</button>
        </FormGroup>
      </Container>
    </>
  );
}
