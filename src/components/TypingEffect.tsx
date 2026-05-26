import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface TypingEffectProps {
  words: readonly string[]
  className?: string
}

export function TypingEffect({ words, className }: TypingEffectProps) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.slice(0, text.length + 1))
          if (text === current) {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          setText(current.slice(0, text.length - 1))
          if (text === '') {
            setIsDeleting(false)
            setIndex((i) => (i + 1) % words.length)
          }
        }
      },
      isDeleting ? 40 : 80
    )
    return () => clearTimeout(timeout)
  }, [text, isDeleting, index, words])

  return (
    <span className={className}>
      {text}
      <motion.span
        className="inline-block w-0.5 h-[1em] bg-accent ml-1 align-middle"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity }}
      />
    </span>
  )
}
