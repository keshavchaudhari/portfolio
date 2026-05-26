import type { ReactNode } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { ParticleBackground } from '../components/ParticleBackground'
import { ScrollProgress } from '../components/ScrollProgress'
import { BackToTop } from '../components/BackToTop'
import { CustomCursor } from '../components/CustomCursor'

interface MainLayoutProps {
  children: ReactNode
  isDark: boolean
  onToggleTheme: () => void
  isProfessional: boolean
  isCreative: boolean
  onToggleMode: () => void
}

export function MainLayout({ 
  children, 
  isDark, 
  onToggleTheme, 
  isProfessional, 
  isCreative, 
  onToggleMode 
}: MainLayoutProps) {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <ScrollProgress />
      <CustomCursor />
      <Navbar 
        isDark={isDark} 
        onToggleTheme={onToggleTheme} 
        isProfessional={isProfessional}
        isCreative={isCreative}
        onToggleMode={onToggleMode}
      />
      <main className="relative z-10">{children}</main>
      <Footer />
      <BackToTop />
    </div>
  )
}
