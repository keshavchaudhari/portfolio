import aiMockInterviewImg from '../assets/projects/ai-mock-interview.png'
import shareRouteImg from '../assets/projects/share-route.png'

export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  features: string[]
  techStack: string[]
  github: string
  live: string
  gradient: string
}

export const PROJECTS: Project[] = [
  {
    id: 'ai-mock-interview',
    title: 'AI Mock Interview Platform',
    subtitle: 'AI-powered interview prep with real-time analytics',
    description:
      'AI-powered interview preparation platform with real-time feedback, role-based mock interviews, Firebase authentication, and detailed performance analytics.',
    image: aiMockInterviewImg,
    features: [
      'AI-generated interview questions',
      'AI feedback and scoring',
      'Firebase authentication',
      'Real-time dashboard',
      'Analytics charts',
      'Gemini AI integration',
    ],
    techStack: ['React', 'TypeScript', 'Firebase', 'Gemini API', 'Tailwind CSS'],
    github: 'https://github.com/keshavchaudhari/AI-Mock-Interview-Platform',
    live: 'https://ai-mock-interview-platform-tau-teal.vercel.app/',
    gradient: 'from-violet-600/30 to-cyan-500/20',
  },
  {
    id: 'shareroute',
    title: 'ShareRoute Ride Sharing App',
    subtitle: 'Smart ride-sharing and carpooling platform',
    description:
      'Real-time ride-sharing and carpooling platform with Firebase backend, booking system, subscriptions, and responsive UI.',
    image: shareRouteImg,
    features: [
      'Ride sharing platform',
      'Driver/rider dashboards',
      'Real-time booking',
      'Firebase realtime updates',
      'Seat management',
      'Subscription logic',
    ],
    techStack: ['React', 'Firebase', 'Tailwind CSS', 'Razorpay'],
    github: 'https://github.com/keshavchaudhari/ShareRoute',
    live: 'https://share-route-1vcn.vercel.app/',
    gradient: 'from-purple-600/30 to-indigo-500/20',
  },
]
