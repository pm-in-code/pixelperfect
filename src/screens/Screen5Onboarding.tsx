import { useNavigate } from 'react-router-dom'
import { FullBleedScreen } from '../components/FullBleedScreen'
import footer from './overlayFooter.module.css'

export function Screen5Onboarding() {
  const navigate = useNavigate()
  return (
    <FullBleedScreen imageSrc="assets/screens/screen-5.png" alt="">
      <div style={{ flex: 1 }} />
      <div className={`${footer.footer} ${footer.footerDark}`}>
        <button
          type="button"
          className={`${footer.invisibleHit} ${footer.wide}`}
          onClick={() => navigate('/screen/6')}
          aria-label="Next"
        />
      </div>
    </FullBleedScreen>
  )
}
