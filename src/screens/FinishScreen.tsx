import { useNavigate } from 'react-router-dom'
import { PillButton } from '../components/PillButton'
import styles from './FinishScreen.module.css'
import footer from './overlayFooter.module.css'

export function FinishScreen() {
  const navigate = useNavigate()
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>You&apos;re all set</h1>
      <p className={styles.text}>Thanks for walking through Silver Pulse. You can start again anytime.</p>
      <PillButton className={footer.wide} caps onClick={() => navigate('/screen/1')}>
        Start over
      </PillButton>
    </div>
  )
}
