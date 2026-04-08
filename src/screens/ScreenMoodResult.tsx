import { useNavigate, useParams } from 'react-router-dom'
import { FullBleedScreen } from '../components/FullBleedScreen'
import footer from './overlayFooter.module.css'

const MOOD_IMAGES: Record<string, string> = {
  '1': 'assets/screens/screen-7-1.png',
  '2': 'assets/screens/screen-7-2.png',
  '3': 'assets/screens/screen-7-3.png',
  '4': 'assets/screens/screen-7-4.png',
}

export function ScreenMoodResult() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const key = slug && MOOD_IMAGES[slug] ? slug : '1'
  const src = MOOD_IMAGES[key]

  return (
    <FullBleedScreen imageSrc={src} alt="">
      <div style={{ flex: 1 }} />
      <div className={`${footer.footer} ${footer.footerTight}`}>
        <button
          type="button"
          className={`${footer.invisibleHit} ${footer.wide}`}
          onClick={() => navigate('/done')}
          aria-label="Continue"
        />
      </div>
    </FullBleedScreen>
  )
}
