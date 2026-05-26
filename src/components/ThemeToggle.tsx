import { motion } from 'framer-motion'
import { HiMoon, HiSun } from 'react-icons/hi'

interface ThemeToggleProps {
  isDark: boolean
  onToggle: () => void
}

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <motion.button
      onClick={onToggle}
      className="p-2.5 rounded-xl glass hover-lift text-text"
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {isDark ? <HiSun className="w-5 h-5 text-accent" /> : <HiMoon className="w-5 h-5 text-primary" />}
    </motion.button>
  )
}
