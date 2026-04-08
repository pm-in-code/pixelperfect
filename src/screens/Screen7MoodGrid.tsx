import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { assetPath } from '../utils/assetPath'
import styles from './Screen7MoodGrid.module.css'

export function Screen7MoodGrid() {
  const navigate = useNavigate()
  const [remind, setRemind] = useState(true)

  return (
    <div className={styles.root}>
      <img className={styles.img} src={assetPath('assets/screens/screen-7.png')} alt="" />
      <div className={styles.overlay}>
        <div className={styles.topSpacer} aria-hidden />
        <div className={styles.cardGrid}>
          <button
            type="button"
            className={styles.cardHit}
            aria-label="I'm okay"
            onClick={() => navigate('/screen/7/mood/2')}
          />
          <button
            type="button"
            className={styles.cardHit}
            aria-label="A little lonely"
            onClick={() => navigate('/screen/7/mood/3')}
          />
          <button
            type="button"
            className={styles.cardHit}
            aria-label="A bit worried"
            onClick={() => navigate('/screen/7/mood/4')}
          />
          <button
            type="button"
            className={styles.cardHit}
            aria-label="Tired"
            onClick={() => navigate('/screen/7/mood/1')}
          />
        </div>
        <div className={styles.bottomSpacer} aria-hidden />
        <div className={styles.checkboxWrap}>
          <button
            type="button"
            role="checkbox"
            aria-checked={remind}
            aria-label="Remind me daily to stay active"
            className={styles.checkboxHit}
            onClick={() => setRemind((v) => !v)}
          />
        </div>
      </div>
    </div>
  )
}
