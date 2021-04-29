import React, { ReactNode } from 'react';
import styles from '../styles/components/SignWithProvider.module.css';

interface SignWithProviderProps {
  children: ReactNode;
  imagePath: string;
}

export function SignWithProviderButton({
  children,
  imagePath,
}: SignWithProviderProps) {
  return (
    <button className={styles.signWithProviderButton}>
      <img src={imagePath} alt="Logo" />
      {children}
    </button>
  );
}
