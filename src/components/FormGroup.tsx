import React, { FormHTMLAttributes, ReactNode } from 'react';

interface FormGroupProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

import styles from '../styles/components/FormGroup.module.css';

export function FormGroup({ children, ...rest }: FormGroupProps) {
  return (
    <form className={styles.formGroup} {...rest}>
      {children}
    </form>
  );
}
