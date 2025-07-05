import styles from './Button.module.scss';

function Button({ children, variant = "primary" }) {
  const classNames = `${styles.button} ${styles[variant]}`
  return (
    <button className={classNames}>
      {children}
    </button>
  )
}

export default Button
