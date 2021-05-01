import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import useSignUpForm from '../../hooks/useSignUpForm';

import { FormGroup, Field } from './styles';
import { Container, ErrorWarning } from '../../styles/pages/Shared';

export interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export default function SignUp() {
  const { register, onSubmit, errors } = useSignUpForm();

  return (
    <>
      <Head>
        <title>Cadastro | Move.it</title>
      </Head>{' '}
      <Container>
        <FormGroup onSubmit={onSubmit}>
          <h1>Cadastrar-se</h1>
          <hr />
          <Field hasErrors={!!errors.name}>
            <label htmlFor="firstName">Nome</label>
            <input
              type="text"
              {...register('name')}
              placeholder="Como você quer ser chamado ?"
            />
            {errors.name && <ErrorWarning>{errors.name.message}</ErrorWarning>}
          </Field>
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
