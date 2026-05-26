import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { SectionHeading } from '../components/SectionHeading'
import { Badge } from '../components/Badge'
import { PROJECTS } from '../data/projects'
import { staggerContainer, staggerItem } from '../animations/variants'
import { HiCheck } from 'react-icons/hi'

export function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          label="Portfolio"
          title="Featured Projects"
          description="Production-grade applications showcasing modern frontend and AI integration."
        />

        <motion.div
          className="space-y-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.id}
              variants={staggerItem}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <motion.div
                className={`relative group ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} blur-xl opacity-60`}
                />
                <div className="relative glass rounded-2xl overflow-hidden gradient-border bg-card">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="relative z-10 w-full h-64 sm:h-80 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 z-20 bg-gradient-to-t from-bg/50 via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <span className="text-accent text-sm font-medium">{project.subtitle}</span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-text mt-2 mb-3">
                  {project.title}
                </h3>
                <p className="text-muted leading-relaxed mb-6">{project.description}</p>

                <ul className="space-y-2 mb-6">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted">
                      <HiCheck className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass hover-lift text-sm font-medium text-text"
                    whileHover={{ scale: 1.03 }}
                  >
                    <FaGithub className="w-4 h-4" />
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
                    whileHover={{ scale: 1.03 }}
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
