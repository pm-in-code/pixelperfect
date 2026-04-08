import { useEffect, useRef, useState } from 'react'
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
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null)
  const navTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (navTimerRef.current) window.clearTimeout(navTimerRef.current)
    }
  }, [])

  const onPickCard = (slug: string) => {
    if (navTimerRef.current) window.clearTimeout(navTimerRef.current)
    setSelectedSlug(slug)
    navTimerRef.current = window.setTimeout(() => {
      navTimerRef.current = null
      navigate(`/screen/7/mood/${slug}`)
    }, 240)
  }

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
            className={`${styles.card} ${selectedSlug === card.slug ? styles.cardSelected : ''}`}
            onClick={() => onPickCard(card.slug)}
            aria-label={card.label}
            aria-pressed={selectedSlug === card.slug}
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
