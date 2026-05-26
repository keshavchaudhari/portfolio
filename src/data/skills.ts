import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiFirebase,
  SiTailwindcss,
  SiGit,
  SiFramer,
  SiVite,
} from 'react-icons/si'
import { TbApi, TbBrain } from 'react-icons/tb'
import type { IconType } from 'react-icons'

export type Skill = {
  name: string
  level: number
  icon: IconType
  color: string
}

export const SKILLS: Skill[] = [
  { name: 'HTML', level: 95, icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS', level: 92, icon: SiCss, color: '#1572B6' },
  { name: 'JavaScript', level: 90, icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', level: 88, icon: SiTypescript, color: '#3178C6' },
  { name: 'React', level: 92, icon: SiReact, color: '#61DAFB' },
  { name: 'Firebase', level: 82, icon: SiFirebase, color: '#FFCA28' },
  { name: 'Tailwind CSS', level: 94, icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Git & GitHub', level: 88, icon: SiGit, color: '#F05032' },
  { name: 'Framer Motion', level: 85, icon: SiFramer, color: '#BB4B96' },
  { name: 'REST APIs', level: 86, icon: TbApi, color: '#7C3AED' },
  { name: 'Vite', level: 90, icon: SiVite, color: '#646CFF' },
  { name: 'AI Integration', level: 84, icon: TbBrain, color: '#A78BFA' },
]
