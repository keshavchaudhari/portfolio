import { motion } from 'framer-motion'
import { HiDownload, HiDocumentText } from 'react-icons/hi'
import { SectionHeading } from '../components/SectionHeading'
import { GlassCard } from '../components/GlassCard'
import { Button } from '../components/Button'
import { SITE } from '../constants/site'
import { SKILLS } from '../data/skills'
import { fadeInUp } from '../animations/variants'

const resumeSkills = SKILLS.slice(0, 8).map((s) => s.name)

export function Resume() {
  return (
    <section id="resume" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      <div className="container-custom relative">
        <SectionHeading
          label="Resume"
          title="Professional Profile"
          description="Download my resume or preview key highlights below."
        />

        <motion.div
          className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="relative overflow-hidden" hover={false}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/20">
                <HiDocumentText className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-text">{SITE.name}</h3>
                <p className="text-sm text-muted">{SITE.title}</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                  Career Objective
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  Passionate Frontend Developer specializing in React.js, TypeScript, Tailwind CSS,
                  Firebase, and modern UI/UX — focused on scalable, high-performance web applications.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                  Core Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {resumeSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg text-xs bg-white/5 text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4 space-y-2 text-sm text-muted">
              <p>• Intern at Darshand Digital Solution LLP</p>
              <p>• AI Mock Interview & ShareRoute live projects</p>
              <p>• Published research — Smart Parking Management System</p>
              <p>• MCA pursuing @ SSBT&apos;s College of Engineering</p>
            </div>
          </GlassCard>

          <div className="flex flex-col justify-center items-center gap-6">
            <motion.div
              className="w-full aspect-[3/4] max-w-sm glass rounded-2xl p-8 flex flex-col items-center justify-center text-center gradient-border"
              whileHover={{ scale: 1.02 }}
            >
              <HiDocumentText className="w-16 h-16 text-primary/50 mb-4" />
              <p className="font-display text-lg font-semibold text-text mb-2">Resume Preview</p>
              <p className="text-sm text-muted mb-6">
                Full resume with experience, education, and project details.
              </p>
              <p className="text-xs text-muted font-mono">{SITE.resumeFileName}</p>
            </motion.div>

            <Button
              href={SITE.resumeUrl}
              download={SITE.resumeFileName}
              className="w-full sm:w-auto"
            >
              <HiDownload className="w-5 h-5" />
              Download Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
