import type { LucideIcon } from 'lucide-react'
import { Briefcase, FileText, GraduationCap, School } from 'lucide-react'

export type TimelineItemType = 'internship' | 'research' | 'mca' | 'bca'

export interface TimelineItem {
  id: string
  type: TimelineItemType
  icon: LucideIcon
  title: string
  subtitle?: string
  organization: string
  duration: string
  description: string
  tags: string[]
  researchPaperTitle?: string
  link?: string
  linkLabel?: string
}

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: 'internship',
    type: 'internship',
    icon: Briefcase,
    title: 'Intern – Junior Web Developer',
    organization: 'DARSHAND DIGITAL SOLUTION',
    duration: 'Jan 2026 – Present',
    description:
      'Working on frontend web development using React, JavaScript, and Tailwind CSS. Building responsive user interfaces and assisting in real client projects.',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Frontend Development'],
  },
  {
    id: 'mca',
    type: 'mca',
    icon: GraduationCap,
    title: 'MCA (Pursuing)',
    organization: "SSBT's College of Engineering and Technology, Jalgaon",
    duration: '2024 – 2026',
    description:
      'Currently pursuing MCA with focus on Web Development, React, and Backend technologies.',
    tags: ['MCA', 'React', 'Backend Technologies'],
  },
  {
    id: 'research',
    type: 'research',
    icon: FileText,
    title: 'Research Paper Published',
    subtitle: 'Smart Parking Management System',
    organization: 'IJARCCE',
    duration: 'Published 2025',
    description:
      'Research paper published on Smart Parking Management System focusing on IoT-based smart parking solutions and efficient parking management.',
    researchPaperTitle: 'Smart Parking Management System',
    link: 'https://ijarcce.com/wp-content/uploads/2025/10/IJARCCE.2025.14915-Smart.pdf',
    linkLabel: 'View Research Paper',
    tags: ['Research', 'Smart Parking', 'IoT', 'Publication'],
  },
  {
    id: 'bca',
    type: 'bca',
    icon: School,
    title: 'BCA (Bachelor of Computer Applications)',
    organization: 'G. H. Raisoni Institute of Engineering & Management, Jalgaon',
    duration: '2021 – 2024',
    description:
      'Studied programming fundamentals, databases, software development, and web technologies.',
    tags: ['BCA', 'Programming', 'Database', 'Web Technologies'],
  },
]
