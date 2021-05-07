import { useForm } from 'react-hook-form'
import { useCallback, useMemo } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

interface SignUpFormData {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

import { useAuth } from '../contexts/AuthContext'
import { useRouter } from 'next/router'

export default function useSignUpForm() {
  const validationSchema = useMemo(
    () =>
      yup.object().shape({
        name: yup
          .string()
          .max(16, 'Máximo de 16 caracteres')
          .required('Nome é obrigatório'),
        email: yup.string().required('Email é obrigatório'),
        password: yup
          .string()
          .min(6, 'A senha deve ter no mínimo 6 caracteres')
          .required('Senha é obrigatório'),
        passwordConfirmation: yup.string().test({
          name: 'password-confirmation',
          message: 'As senhas devem coincidir',
          test: function () {
            const { password, passwordConfirmation } = this.parent
            if (password && passwordConfirmation !== password) {
              return false
            }
            return true
          },
        }),
      }),
    []
  )

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: yupResolver(validationSchema),
  })

  const { registerWithEmailAndPassword } = useAuth()
  const router = useRouter()

  const onSubmit = useCallback(async (formValues: SignUpFormData) => {
    const { email, passwordConfirmation, name } = formValues

    await registerWithEmailAndPassword(email, passwordConfirmation, name)
    router.push('/')
  }, [])

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    errors,
  }
}
