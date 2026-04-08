import { useNavigate } from 'react-router-dom'
import { FullBleedScreen } from '../components/FullBleedScreen'
import footer from './overlayFooter.module.css'

export function Screen6Ready() {
  const navigate = useNavigate()
  return (
    <FullBleedScreen imageSrc="assets/screens/screen-6.png" alt="">
      <div style={{ flex: 1 }} />
      <div className={`${footer.footer} ${footer.footerDark}`}>
        <button
          type="button"
          className={`${footer.invisibleHit} ${footer.wide}`}
          onClick={() => navigate('/screen/7')}
          aria-label="Next"
        />
      </div>
    </FullBleedScreen>
  )
}
