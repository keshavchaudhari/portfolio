import { motion } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading'
import { GlassCard } from '../components/GlassCard'
import { fadeInUp, staggerContainer, staggerItem } from '../animations/variants'
import { HiCode, HiLightningBolt, HiSparkles } from 'react-icons/hi'

const highlights = [
  {
    icon: HiCode,
    title: 'Clean Code Advocate',
    desc: 'Writing maintainable, scalable TypeScript and React architectures.',
  },
  {
    icon: HiLightningBolt,
    title: 'Performance First',
    desc: 'Optimizing bundles, animations, and UX for lightning-fast experiences.',
  },
  {
    icon: HiSparkles,
    title: 'AI Integration',
    desc: 'Building intelligent features with Gemini AI and modern API patterns.',
  },
]

export function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          label="About Me"
          title="Crafting Digital Excellence"
          description="A passionate frontend developer focused on building products that recruiters and users love."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard hover={false} className="space-y-4">
              <p className="text-muted leading-relaxed">
                I&apos;m <strong className="text-text">Keshav Chaudhari</strong>, an MCA student
                and frontend developer who transforms ideas into polished, production-ready web
                applications. With deep expertise in React, Firebase, and TypeScript, I build
                interfaces inspired by industry leaders like Vercel, Linear, and Stripe.
              </p>
              <p className="text-muted leading-relaxed">
                Passionate about building modern scalable apps, my career goal is to join
                innovative teams building AI-powered products where design and engineering converge.
                I&apos;m especially passionate about integrating AI into user-facing experiences —
                from mock interview platforms to real-time analytics dashboards.
              </p>
              <p className="text-muted leading-relaxed">
                When I&apos;m not coding, I&apos;m exploring new frameworks, contributing to open
                source, and refining my craft in animation and UX design.
              </p>
            </GlassCard>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {highlights.map(({ icon: Icon, title, desc }) => (
              <motion.div key={title} variants={staggerItem}>
                <GlassCard className="flex gap-4 items-start">
                  <div className="p-3 rounded-xl bg-primary/20 text-primary shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-1">{title}</h3>
                    <p className="text-sm text-muted">{desc}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
