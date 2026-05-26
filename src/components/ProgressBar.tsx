import { motion } from 'framer-motion'

interface ProgressBarProps {
  value: number
  color?: string
  delay?: number
}

export function ProgressBar({ value, color = '#7C3AED', delay = 0 }: ProgressBarProps) {
  return (
    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  )
}
