import type { ReactNode } from 'react'
import styles from './PhoneFrame.module.css'

export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className={styles.shell}>
      <div className={styles.frame}>{children}</div>
    </div>
  )
}
