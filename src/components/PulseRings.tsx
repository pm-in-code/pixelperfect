import styles from './PulseRings.module.css'

export function PulseRings() {
  return (
    <div className={styles.wrap} aria-hidden>
      <div className={styles.rippleLayer}>
        <span className={styles.ripple} />
        <span className={styles.ripple} />
        <span className={styles.ripple} />
      </div>
      <div className={`${styles.ring} ${styles.r4}`} />
      <div className={`${styles.ring} ${styles.r3}`} />
      <div className={`${styles.ring} ${styles.r2}`} />
      <div className={`${styles.ring} ${styles.core}`} />
    </div>
  )
}
