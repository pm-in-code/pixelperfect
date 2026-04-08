import { useNavigate } from 'react-router-dom'
import { FullBleedScreen } from '../components/FullBleedScreen'
import footer from './overlayFooter.module.css'

export function Screen3Kitchen() {
  const navigate = useNavigate()
  return (
    <FullBleedScreen imageSrc="assets/screens/screen-3.png" alt="">
      <div style={{ flex: 1 }} />
      <div className={`${footer.footer} ${footer.footerTight}`}>
        <button
          type="button"
          className={`${footer.invisibleHit} ${footer.wide}`}
          onClick={() => navigate('/screen/4')}
          aria-label="Next"
        />
      </div>
    </FullBleedScreen>
  )
}
