import React, { InputHTMLAttributes } from 'react';
import styles from '../styles/components/InputField.module.scss';

export function InputField({ ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={styles.inputField} {...rest} />;
}
