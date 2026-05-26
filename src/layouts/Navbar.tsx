import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { HiMenu, HiX, HiSparkles, HiBriefcase } from 'react-icons/hi'
import { NAV_LINKS, SITE } from '../constants/site'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { scrollToSection } from '../utils/scroll'
import { ThemeToggle } from '../components/ThemeToggle'
import { cn } from '../utils/cn'

interface NavbarProps {
  isDark: boolean
  onToggleTheme: () => void
  isProfessional: boolean
  onToggleMode: () => void
}

export function Navbar({ 
  isDark, 
  onToggleTheme, 
  isProfessional, 
  onToggleMode 
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const sectionIds = NAV_LINKS.map((l) => l.id)
  const activeId = useScrollSpy(sectionIds)

  const handleNav = (id: string) => {
    scrollToSection(id)
    setMobileOpen(false)
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-3 md:pt-4 overflow-x-hidden"
    >
      <nav className="container-custom mx-auto glass-strong rounded-2xl px-4 md:px-6 py-3 md:py-4 flex items-center justify-between h-14 md:h-16 w-full">
        <button
          onClick={() => handleNav('hero')}
          className="font-display font-bold text-lg md:text-xl gradient-text shrink-0 z-10"
        >
          {SITE.name.split(' ')[0]}
          <span className="text-accent">.</span>
        </button>

        <ul className="hidden lg:flex items-center gap-1 shrink-0 z-10">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNav(link.id)}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300',
                  activeId === link.id
                    ? 'text-primary bg-primary/10'
                    : 'text-muted hover:text-text hover:bg-white/5'
                )}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 md:gap-3 shrink-0 z-10">
          <button
            onClick={onToggleMode}
            className="p-2.5 rounded-lg bg-white/5 text-text hover:bg-white/10 active:scale-95 transition-all"
            aria-label="Toggle portfolio mode"
          >
            {isProfessional ? (
              <HiSparkles className="w-5 h-5" />
            ) : (
              <HiBriefcase className="w-5 h-5" />
            )}
          </button>
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          <button
            onClick={() => handleNav('contact')}
            className="hidden sm:inline-flex px-4 py-2 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Hire Me
          </button>
          <button
            className="lg:hidden p-2.5 rounded-lg text-text bg-white/5 hover:bg-white/10 active:scale-95 transition-all"
            onClick={() => {
              console.log('Hamburger clicked! Current state:', mobileOpen)
              setMobileOpen(!mobileOpen)
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden container-custom mx-auto mt-2 glass-strong rounded-2xl overflow-hidden w-full z-40"
          >
            <ul className="py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    className={cn(
                      'w-full text-left px-6 py-3 text-sm font-medium transition-colors',
                      activeId === link.id ? 'text-primary bg-primary/10' : 'text-muted'
                    )}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
