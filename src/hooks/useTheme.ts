import { useCallback, useEffect, useState } from 'react'

type Theme = 'dark' | 'light'
type Mode = 'professional' | 'creative'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'dark'
    const stored = localStorage.getItem('theme') as Theme | null
    if (stored) return stored
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })

  const [mode, setMode] = useState<Mode>(() => {
    if (typeof window === 'undefined') return 'professional'
    const stored = localStorage.getItem('mode') as Mode | null
    return stored || 'professional'
  })

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('light', 'dark', 'professional-mode', 'creative-mode')
    root.classList.add(theme)
    root.classList.add(`${mode}-mode`)
    localStorage.setItem('theme', theme)
    localStorage.setItem('mode', mode)
  }, [theme, mode])

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }, [])

  const toggleMode = useCallback(() => {
    setMode((m) => (m === 'professional' ? 'creative' : 'professional'))
  }, [])

  return { 
    theme, 
    toggleTheme, 
    isDark: theme === 'dark',
    mode,
    toggleMode,
    isProfessional: mode === 'professional',
    isCreative: mode === 'creative'
  }
}
