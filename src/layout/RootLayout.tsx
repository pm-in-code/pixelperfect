import { Outlet } from 'react-router-dom'
import { PhoneFrame } from '../components/PhoneFrame'

export function RootLayout() {
  return (
    <PhoneFrame>
      <Outlet />
    </PhoneFrame>
  )
}
