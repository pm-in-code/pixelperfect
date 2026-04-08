import { useNavigate } from 'react-router-dom'
import { FullBleedScreen } from '../components/FullBleedScreen'
import { PillButton } from '../components/PillButton'
import footer from './overlayFooter.module.css'

export function Screen4Companion() {
  const navigate = useNavigate()
  return (
    <FullBleedScreen imageSrc="assets/screens/screen-4.png" alt="">
      <div style={{ flex: 1 }} />
      <div className={`${footer.footer} ${footer.footerDark}`}>
        <PillButton caps className={footer.wide} variant="lime" onClick={() => navigate('/screen/5')}>
          Next
        </PillButton>
      </div>
    </FullBleedScreen>
  )
}
