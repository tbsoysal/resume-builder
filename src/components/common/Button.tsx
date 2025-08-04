import styles from './Button.module.scss';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

function Button({ children, variant = "primary" }: ButtonProps) {
  const classNames = `${styles.button} ${styles[variant]}`
  return (
    <button className={classNames}>
      {children}
    </button>
  )
}

export default Button
