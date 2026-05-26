import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { HiDownload, HiArrowDown } from 'react-icons/hi'
import { SITE, ROLES } from '../constants/site'
import { Button } from '../components/Button'
import { TypingEffect } from '../components/TypingEffect'
import { scrollToSection } from '../utils/scroll'
import { staggerContainer, staggerItem } from '../animations/variants'

const socials = [
  { icon: FaGithub, href: SITE.github, label: 'GitHub' },
  { icon: FaLinkedin, href: SITE.linkedin, label: 'LinkedIn' },
  { icon: FaEnvelope, href: SITE.gmail, label: 'Gmail' },
]

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center section-padding pt-28 md:pt-40 overflow-hidden"
    >
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-[120px]" />

      {/* Floating UI elements */}
      <motion.div
        className="absolute top-32 right-[10%] hidden lg:block glass rounded-xl p-4 text-xs text-muted"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <span className="text-accent font-mono">const dev = </span>
        <span className="text-secondary">&quot;Keshav&quot;</span>
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-[8%] hidden lg:block glass rounded-xl px-4 py-3"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      >
        <div className="flex gap-1.5 mb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
        </div>
        <p className="text-xs font-mono text-muted">npm run build ✓</p>
      </motion.div>

      <motion.div
        className="container-custom relative z-10 text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={staggerItem} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1
          variants={staggerItem}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text mb-4"
        >
          Hi, I&apos;m{' '}
          <span className="gradient-text">{SITE.name}</span>
        </motion.h1>

        <motion.div
          variants={staggerItem}
          className="text-xl sm:text-2xl md:text-3xl font-medium text-muted mb-6 h-10"
        >
          <TypingEffect words={ROLES} className="gradient-text font-display" />
        </motion.div>

        <motion.p
          variants={staggerItem}
          className="max-w-2xl mx-auto text-muted text-base sm:text-lg leading-relaxed mb-10"
        >
          I craft premium, performant web experiences at the intersection of modern frontend
          engineering and AI. Passionate about React, design systems, and building products that
          feel like world-class SaaS.
        </motion.p>

        <motion.div
          variants={staggerItem}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 w-full sm:w-auto"
        >
          <Button onClick={() => scrollToSection('projects')} className="w-full sm:w-auto">View Projects</Button>
          <Button variant="secondary" href={SITE.resumeUrl} download={SITE.resumeFileName} className="w-full sm:w-auto">
            <HiDownload className="w-4 h-4" />
            Download Resume
          </Button>
          <Button variant="outline" onClick={() => scrollToSection('contact')} className="w-full sm:w-auto">
            Hire Me
          </Button>
        </motion.div>

        <motion.div variants={staggerItem} className="flex items-center justify-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass hover-lift text-muted hover:text-primary transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              aria-label={label}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-accent transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll down"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <HiArrowDown className="w-5 h-5" />
      </motion.button>
    </section>
  )
}
