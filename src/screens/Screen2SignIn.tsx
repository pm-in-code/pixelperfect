import { useNavigate } from 'react-router-dom'
import { PillButton } from '../components/PillButton'
import { PulseRings } from '../components/PulseRings'
import { AppleLogo, GoogleLogo } from '../components/icons'
import styles from './Screen2SignIn.module.css'

export function Screen2SignIn() {
  const navigate = useNavigate()
  const go = () => navigate('/screen/3')

  return (
    <div className={styles.root}>
      <div className={styles.rings}>
        <PulseRings />
      </div>
      <h1 className={styles.title}>
        Sign in to begin
        <br />
        your conversation
      </h1>
      <div className={styles.spacer} />
      <div className={styles.actions}>
        <PillButton variant="white" onClick={go}>
          <AppleLogo />
          Continue with Apple
        </PillButton>
        <PillButton variant="dark" onClick={go}>
          <GoogleLogo />
          Continue with Google
        </PillButton>
      </div>
      <p className={styles.legal}>
        By signing in, you agree to our
        <br />
        <strong>Privacy Policy, Terms of Use, and EULA</strong>
      </p>
    </div>
  )
}
