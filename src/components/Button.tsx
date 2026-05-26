import { motion } from 'framer-motion'
import type { ReactNode, ButtonHTMLAttributes } from 'react'
import { cn } from '../utils/cn'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: Variant
  href?: string
  external?: boolean
  download?: string
  className?: string
}

const variants: Record<Variant, string> = {
  primary:
    'bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 glow-primary',
  secondary:
    'bg-card hover:bg-card/80 text-text border border-white/10 hover:border-primary/50',
  ghost: 'bg-transparent hover:bg-white/5 text-text',
  outline:
    'bg-transparent border border-primary/50 text-primary hover:bg-primary/10',
}

export function Button({
  children,
  variant = 'primary',
  href,
  external,
  download,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300',
    variants[variant],
    className
  )

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        {...(props as any)}
      >
        {children}
      </motion.a>
    )
  }

  const { onClick, disabled, type = 'button', ...rest } = props

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      {...(rest as any)}
    >
      {children}
    </motion.button>
  )
}
