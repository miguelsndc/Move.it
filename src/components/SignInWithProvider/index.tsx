import React, { ReactNode } from 'react'
import { ButtonHTMLAttributes } from 'react'
import { Button } from './styles'

interface SignWithProviderProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  imagePath: string
}

export function SignWithProviderButton({
  children,
  imagePath,
  ...rest
}: SignWithProviderProps) {
  return (
    <Button {...rest}>
      <img src={imagePath} alt="Logo" />
      {children}
    </Button>
  )
}
