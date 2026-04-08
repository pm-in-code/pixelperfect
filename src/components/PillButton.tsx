import type { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './PillButton.module.css'

type Variant = 'lime' | 'limeDark' | 'white' | 'dark'

export function PillButton({
  children,
  variant = 'lime',
  caps = false,
  className = '',
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  caps?: boolean
  children: ReactNode
}) {
  const v =
    variant === 'lime'
      ? styles.lime
      : variant === 'limeDark'
        ? styles.limeDark
        : variant === 'white'
          ? styles.white
          : styles.dark
  return (
    <button type="button" className={`${styles.btn} ${v} ${caps ? styles.labelCaps : ''} ${className}`.trim()} {...rest}>
      {children}
    </button>
  )
}
