import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import type { TimelineItem } from '../data/experience'
import { staggerItem } from '../animations/variants'

const typeAccent: Record<TimelineItem['type'], string> = {
  internship: 'from-primary to-violet-400',
  research: 'from-accent to-cyan-300',
  mca: 'from-secondary to-primary',
  bca: 'from-violet-400/80 to-accent/80',
}

const iconRing: Record<TimelineItem['type'], string> = {
  internship: 'bg-primary/20 text-primary ring-primary/40',
  research: 'bg-accent/20 text-accent ring-accent/40',
  mca: 'bg-secondary/20 text-secondary ring-secondary/40',
  bca: 'bg-primary/15 text-secondary ring-violet-400/30',
}

interface TimelineCardProps {
  item: TimelineItem
  index: number
}

export function TimelineCard({ item, index }: TimelineCardProps) {
  const Icon = item.icon

  return (
    <motion.article
      variants={staggerItem}
      className="relative pl-16 md:pl-24 pb-12 lg:pb-16 last:pb-0"
    >
      {/* Timeline node */}
      <motion.div
        className={`absolute left-3 md:left-6 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-bg flex items-center justify-center ring-2 shadow-lg shadow-primary/20 ${iconRing[item.type]}`}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08, type: 'spring', stiffness: 200 }}
      >
        <Icon className="w-4 h-4 md:w-5 md:h-5" aria-hidden />
      </motion.div>

      <motion.div
        className="glass rounded-2xl p-6 md:p-8 hover-lift gradient-border group"
        whileHover={{ y: -6, transition: { duration: 0.25 } }}
      >
        {/* Duration badge with gradient border */}
        <span
          className={`inline-flex mb-4 p-[1px] rounded-full bg-gradient-to-r ${typeAccent[item.type]}`}
        >
          <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold text-accent bg-bg/90">
            {item.duration}
          </span>
        </span>

        {item.subtitle && (
          <p className="text-xs font-semibold uppercase tracking-wider text-secondary mb-1">
            {item.subtitle}
          </p>
        )}

        <h3 className="font-display text-lg md:text-xl font-bold text-text mb-1 group-hover:text-primary transition-colors">
          {item.title}
        </h3>

        <p className="text-sm font-medium text-muted mb-3">{item.organization}</p>

        {item.researchPaperTitle && (
          <p className="text-sm text-text/90 mb-3 pl-3 border-l-2 border-accent/50">
            <span className="text-muted">Paper: </span>
            {item.researchPaperTitle}
          </p>
        )}

        <p className="text-sm md:text-base text-muted leading-relaxed mb-5">{item.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/5 text-muted border border-white/10 hover:border-primary/30 hover:text-secondary transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {item.link && item.linkLabel && (
          <motion.a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            aria-label={`${item.linkLabel} (opens in new tab)`}
          >
            {item.linkLabel}
            <ExternalLink className="w-4 h-4" aria-hidden />
          </motion.a>
        )}
      </motion.div>
    </motion.article>
  )
}
