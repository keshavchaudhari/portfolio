import { motion } from 'framer-motion'
import { fadeInUp } from '../animations/variants'

interface SectionHeadingProps {
  label: string
  title: string
  description?: string
}

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      className="text-center max-w-2xl mx-auto mb-16"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
    >
      <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-accent bg-accent/10 border border-accent/20 mb-4">
        {label}
      </span>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-muted text-base sm:text-lg leading-relaxed">{description}</p>
      )}
    </motion.div>
  )
}
