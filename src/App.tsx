import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Toaster } from 'sonner'
import { MainLayout } from './layouts/MainLayout'
import { HomePage } from './pages/HomePage'
import { PageLoader } from './components/PageLoader'
import { useTheme } from './hooks/useTheme'

function App() {
  const [loading, setLoading] = useState(true)
  const { isDark, toggleTheme, isProfessional, toggleMode } = useTheme()

  return (
    <>
      <Toaster theme="dark" position="bottom-right" />
      <AnimatePresence>
        {loading && <PageLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      {!loading && (
        <MainLayout 
          isDark={isDark} 
          onToggleTheme={toggleTheme} 
          isProfessional={isProfessional}
          onToggleMode={toggleMode}
        >
          <HomePage />
        </MainLayout>
      )}
    </>
  )
}

export default App
