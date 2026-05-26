import { cn } from '../utils/cn'

interface BadgeProps {
  children: React.ReactNode
  className?: string
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium',
        'bg-primary/15 text-secondary border border-primary/20',
        className
      )}
    >
      {children}
    </span>
  )
}
