import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { assetPath } from '../utils/assetPath'
import styles from './Screen7MoodGrid.module.css'

/** Те же ассеты, что экраны 7.1–7.4 — внизу сетки были пустые плейсхолдеры в screen-7.png */
const CARDS: {
  slug: string
  label: string
  src: string
  imgClass: string
}[] = [
  { slug: '2', label: "I'm okay", src: 'assets/screens/screen-7-2.png', imgClass: styles.imgOkay },
  { slug: '3', label: 'A little lonely', src: 'assets/screens/screen-7-3.png', imgClass: styles.imgLonely },
  { slug: '4', label: 'A bit worried', src: 'assets/screens/screen-7-4.png', imgClass: styles.imgWorried },
  { slug: '1', label: 'Tired', src: 'assets/screens/screen-7-1.png', imgClass: styles.imgTired },
]

export function Screen7MoodGrid() {
  const navigate = useNavigate()
  const [remind, setRemind] = useState(true)

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>How are you feeling today?</h1>
        <p className={styles.subtitle}>This will make our chat more helpful for you</p>
      </header>

      <div className={styles.grid}>
        {CARDS.map((card) => (
          <button
            key={card.slug}
            type="button"
            className={styles.card}
            onClick={() => navigate(`/screen/7/mood/${card.slug}`)}
            aria-label={card.label}
          >
            <div className={styles.cardImgWrap}>
              <img className={`${styles.cardImg} ${card.imgClass}`} src={assetPath(card.src)} alt="" />
            </div>
            <span className={styles.cardLabel}>{card.label}</span>
          </button>
        ))}
      </div>

      <div className={styles.remindRow}>
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
  )
}
