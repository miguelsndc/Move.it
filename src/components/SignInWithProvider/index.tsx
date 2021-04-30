import React, { ReactNode } from 'react';
import { Button } from './styles';

interface SignWithProviderProps {
  children: ReactNode;
  imagePath: string;
}

export function SignWithProviderButton({
  children,
  imagePath,
}: SignWithProviderProps) {
  return (
    <Button>
      <img src={imagePath} alt="Logo" />
      {children}
    </Button>
  );
}
