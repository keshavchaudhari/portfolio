import { motion } from 'framer-motion'
import type { Skill } from '../data/skills'
import { GlassCard } from './GlassCard'
import { ProgressBar } from './ProgressBar'
import { staggerItem } from '../animations/variants'

interface SkillCardProps {
  skill: Skill
  index: number
}

export function SkillCard({ skill, index }: SkillCardProps) {
  const Icon = skill.icon

  return (
    <motion.div variants={staggerItem}>
      <GlassCard className="group h-full">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="p-2.5 rounded-xl transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundColor: `${skill.color}20` }}
          >
            <Icon className="w-6 h-6" style={{ color: skill.color }} />
          </div>
          <div>
            <h3 className="font-semibold text-text">{skill.name}</h3>
            <span className="text-xs text-muted">{skill.level}%</span>
          </div>
        </div>
        <ProgressBar value={skill.level} color={skill.color} delay={index * 0.05} />
      </GlassCard>
    </motion.div>
  )
}
