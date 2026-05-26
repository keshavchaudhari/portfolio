import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { GlassCard } from './GlassCard'

interface StatCardProps {
  label: string
  value: number
  suffix?: string
  delay?: number
}

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    const duration = 2000
    const startTime = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * value))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [isInView, value])

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-bold gradient-text font-display">
      {count}
      {suffix}
    </span>
  )
}

export function StatCard({ label, value, suffix, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <GlassCard className="text-center">
        <AnimatedNumber value={value} suffix={suffix} />
        <p className="mt-2 text-muted text-sm font-medium">{label}</p>
      </GlassCard>
    </motion.div>
  )
}
