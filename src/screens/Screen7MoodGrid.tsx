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
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              className={styles.checkboxInput}
              checked={remind}
              onChange={(e) => setRemind(e.target.checked)}
            />
            <span className={`${styles.checkboxBox} ${remind ? styles.checkboxBoxChecked : ''}`}>
              {remind && (
                <svg className={styles.checkIcon} viewBox="0 0 12 12" aria-hidden>
                  <path
                    fill="currentColor"
                    d="M10.3 1.5 4.5 9.2 1.7 6.4 0.5 7.6 4.5 11.5 11.5 2.7z"
                  />
                </svg>
              )}
            </span>
            Remind me daily to stay active
          </label>
        </div>
      </div>
    </div>
  )
}
