import { Navigate, Route, Routes } from 'react-router-dom'
import { RootLayout } from './layout/RootLayout'
import { FinishScreen } from './screens/FinishScreen'
import { Screen1Splash } from './screens/Screen1Splash'
import { Screen2SignIn } from './screens/Screen2SignIn'
import { Screen3Kitchen } from './screens/Screen3Kitchen'
import { Screen4Companion } from './screens/Screen4Companion'
import { Screen5Onboarding } from './screens/Screen5Onboarding'
import { Screen6Ready } from './screens/Screen6Ready'
import { Screen7MoodGrid } from './screens/Screen7MoodGrid'
import { ScreenMoodResult } from './screens/ScreenMoodResult'

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Navigate to="/screen/1" replace />} />
        <Route path="screen/1" element={<Screen1Splash />} />
        <Route path="screen/2" element={<Screen2SignIn />} />
        <Route path="screen/3" element={<Screen3Kitchen />} />
        <Route path="screen/4" element={<Screen4Companion />} />
        <Route path="screen/5" element={<Screen5Onboarding />} />
        <Route path="screen/6" element={<Screen6Ready />} />
        <Route path="screen/7" element={<Screen7MoodGrid />} />
        <Route path="screen/7/mood/:slug" element={<ScreenMoodResult />} />
        <Route path="done" element={<FinishScreen />} />
        <Route path="*" element={<Navigate to="/screen/1" replace />} />
      </Route>
    </Routes>
  )
}
