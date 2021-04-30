import { useForm } from 'react-hook-form';
import { useCallback, useMemo } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export default function useSignUpForm() {
  const validationSchema = useMemo(
    () =>
      yup.object().shape({
        firstName: yup.string().required('Nome é obrigatório'),
        lastName: yup.string().required('Sobrenome é obrigatório'),
        email: yup.string().required('Email é obrigatório'),
        password: yup
          .string()
          .min(6, 'A senha deve ter no mínimo 6 caracteres')
          .required('Senha é obrigatório'),
        passwordConfirmation: yup.string().test({
          name: 'password-confirmation',
          message: 'As senhas devem coincidir',
          test: function () {
            const { password, passwordConfirmation } = this.parent;
            if (password && passwordConfirmation !== password) {
              return false;
            }
            return true;
          },
        }),
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

  const onSubmit = useCallback((formValues: SignUpFormData) => {
    console.log(formValues);
  }, []);

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    errors,
  };
}
