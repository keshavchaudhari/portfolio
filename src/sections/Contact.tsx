import { motion, AnimatePresence } from 'framer-motion'
import { useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'sonner'
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { HiPaperAirplane } from 'react-icons/hi'
import { SectionHeading } from '../components/SectionHeading'
import { GlassCard } from '../components/GlassCard'
import { Button } from '../components/Button'
import { SITE } from '../constants/site'
import { staggerContainer, staggerItem } from '../animations/variants'

const contactInfo = [
  { icon: FaEnvelope, label: 'Email', value: SITE.email, href: SITE.gmail },
  { icon: FaPhone, label: 'Phone', value: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, '')}` },
  { icon: FaMapMarkerAlt, label: 'Location', value: SITE.location, href: undefined },
]

const socials = [
  { icon: FaGithub, href: SITE.github, label: 'GitHub' },
  { icon: FaLinkedin, href: SITE.linkedin, label: 'LinkedIn' },
  { icon: FaEnvelope, href: SITE.gmail, label: 'Email' },
]

type Status = 'idle' | 'loading' | 'success' | 'error'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const validateForm = () => {
    if (!form.name.trim()) {
      toast.error('Please enter your name')
      return false
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(form.email)) {
      toast.error('Please enter a valid email address')
      return false
    }
    if (!form.subject.trim()) {
      toast.error('Please enter a subject')
      return false
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      toast.error('Please enter a message (at least 10 characters)')
      return false
    }
    return true
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setStatus('loading')

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    console.log('EmailJS Config:', { serviceId, templateId, publicKey: publicKey ? 'Set' : 'Not set' })
    console.log('Form data:', { from_name: form.name, from_email: form.email, subject: form.subject, message: form.message, to_name: SITE.name })

    if (!serviceId || !templateId || !publicKey) {
      toast.error('EmailJS configuration is missing. Please check .env file.')
      setStatus('error')
      return
    }

    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_name: SITE.name,
        },
        publicKey
      )
      console.log('EmailJS success:', result)
      toast.success('Message sent successfully!')
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('EmailJS error details:', error)
      if (error instanceof Error) {
        toast.error(`Failed to send: ${error.message}`)
      } else {
        toast.error('Failed to send message. Please try again.')
      }
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="container-custom relative">
        <SectionHeading
          label="Contact"
          title="Let's Build Something Great"
          description="Have a project in mind or want to connect? I'd love to hear from you."
        />

        <motion.div
          className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={staggerItem} className="lg:col-span-2 space-y-4">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <GlassCard key={label} className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/20">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-wider">{label}</p>
                  {href ? (
                    <a href={href} className="text-text font-medium hover:text-primary transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-text font-medium">{value}</p>
                  )}
                </div>
              </GlassCard>
            ))}

            <GlassCard>
              <p className="text-sm text-muted mb-4">Connect with me</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 text-muted hover:text-primary hover:bg-primary/10 transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={staggerItem} className="lg:col-span-3">
            <GlassCard hover={false}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-muted mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-text placeholder:text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-muted mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-text placeholder:text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-muted mb-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-text placeholder:text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                    placeholder="Subject of your message"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-text placeholder:text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full sm:w-auto"
                  disabled={status === 'loading'}
                >
                  <HiPaperAirplane className="w-4 h-4" />
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </Button>

                <AnimatePresence mode="wait">
                  {status === 'success' && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-sm text-emerald-400"
                    >
                      Message sent successfully! I&apos;ll get back to you soon.
                    </motion.p>
                  )}
                  {status === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-sm text-red-400"
                    >
                      Failed to send. Configure EmailJS in .env or email me directly.
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
