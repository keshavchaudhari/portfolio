import { motion } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading'
import { TimelineCard } from '../components/TimelineCard'
import { TIMELINE_ITEMS } from '../data/experience'
import { staggerContainer } from '../animations/variants'

export function Experience() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px]" />
      </div>

      <div className="container-custom relative">
        <SectionHeading
          label="Experience"
          title="Experience & Education"
          description="My professional journey, education, internship, and published research work."
        />

        <motion.div
          className="relative max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          role="list"
          aria-label="Experience and education timeline"
        >
          {/* Glowing timeline line */}
          <div
            className="absolute left-7 md:left-11 top-2 bottom-2 w-px"
            aria-hidden
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary via-accent to-primary/20 opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary via-accent to-transparent blur-sm opacity-80" />
          </div>

          {TIMELINE_ITEMS.map((item, index) => (
            <div key={item.id} role="listitem">
              <TimelineCard item={item} index={index} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
