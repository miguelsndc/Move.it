import { useForm } from 'react-hook-form';
import { useCallback, useMemo } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface SignUpFormData {
  email: string;
  password: string;
}

import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';

export default function useSignUpForm() {
  const validationSchema = useMemo(
    () =>
      yup.object().shape({
        email: yup.string().required('Email é obrigatório'),
        password: yup
          .string()
          .min(6, 'A senha deve ter no mínimo 6 caracteres')
          .required('Senha é obrigatório'),
      }),
    []
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: yupResolver(validationSchema),
  });

  const { loginWithEmailAndPassword } = useAuth();
  const router = useRouter();

  const onSubmit = useCallback(async (formValues: SignUpFormData) => {
    const { email, password } = formValues;

    await loginWithEmailAndPassword(email, password);
    router.push('/');
  }, []);

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    errors,
  };
}
