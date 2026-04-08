import { useNavigate } from 'react-router-dom'
import { PulseRings } from '../components/PulseRings'
import styles from './Screen1Splash.module.css'

export function Screen1Splash() {
  const navigate = useNavigate()
  return (
    <button
      type="button"
      className={styles.root}
      onClick={() => navigate('/screen/2')}
      aria-label="Continue"
    >
      <PulseRings />
      <div>
        <h1 className={styles.title}>
          SILVER
          <br />
          PULSE
        </h1>
        <p className={styles.tagline}>Never alone</p>
      </div>
    </button>
  )
}
