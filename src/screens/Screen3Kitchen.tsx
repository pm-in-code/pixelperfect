import { useNavigate } from 'react-router-dom'
import { FullBleedScreen } from '../components/FullBleedScreen'
import { PillButton } from '../components/PillButton'
import footer from './overlayFooter.module.css'

export function Screen3Kitchen() {
  const navigate = useNavigate()
  return (
    <FullBleedScreen imageSrc="assets/screens/screen-3.png" alt="">
      <div style={{ flex: 1 }} />
      <div className={`${footer.footer} ${footer.footerTight}`}>
        <PillButton caps className={footer.wide} onClick={() => navigate('/screen/4')}>
          Next
        </PillButton>
      </div>
    </FullBleedScreen>
  )
}
