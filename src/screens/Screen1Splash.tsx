import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PulseRings } from '../components/PulseRings'
import styles from './Screen1Splash.module.css'

const SPLASH_DELAY_MS = 7000

export function Screen1Splash() {
  const navigate = useNavigate()

  useEffect(() => {
    const id = window.setTimeout(() => {
      navigate('/screen/2')
    }, SPLASH_DELAY_MS)
    return () => window.clearTimeout(id)
  }, [navigate])

  return (
    <div className={styles.root}>
      <PulseRings />
      <div>
        <h1 className={styles.title}>
          SILVER
          <br />
          PULSE
        </h1>
        <p className={styles.tagline}>Never alone</p>
      </div>
    </div>
  )
}
