export interface Profile {
  name: string
  title: string
  positioning: string
  location: string
  timezone: string
  avatarStudio: string
  avatarField: string
  bioShort: string
  bioFull: string[]
  resumeUrl: string
  githubUrl: string
  githubUsername: string
  linkedinUrl: string
  telegramUrl: string
  telegramUsername: string
  email: string
  emailBackup: string
  portfolioUrl: string
  interests: string[]
  whatICareAbout: {
    title: string
    description: string
    icon: string
  }[]
}

export interface SkillItem {
  name: string
  category: 'Mobile' | 'Backend' | 'Web' | 'Architecture' | 'Tools'
  icon: string
  description: string
  isCore?: boolean
  isLearning?: boolean
}

export interface SkillCategory {
  title: string
  description: string
  skills: SkillItem[]
}

export interface ProjectCaseStudy {
  slug: string
  title: string
  shortTitle?: string
  subtitle: string
  category: 'Mobile Applications' | 'Backend and Integration' | 'Web Development' | 'Academic Projects'
  tagline: string
  role: string
  timeline: string
  status: 'Production' | 'Released' | 'Academic' | 'In Progress'
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  overview: string
  problem: string
  goals: string[]
  contribution: string[]
  architecture: {
    pattern: string
    description: string
    layers: {
      name: string
      role: string
    }[]
  }
  keyFeatures: {
    title: string
    description: string
  }[]
  implementationDecisions: {
    decision: string
    rationale: string
  }[]
  challenges: {
    challenge: string
    solution: string
  }[]
  lessonsLearned: string[]
}

export interface ExperienceItem {
  id: string
  role: string
  company: string
  period: string
  location: string
  type: 'Professional' | 'Instructional'
  focus: string[]
  technologies: string[]
}

export interface EducationItem {
  id: string
  institution: string
  degree: string
  period: string
  status: 'In Progress' | 'Completed'
  details: string
}

export interface PhilosophyItem {
  id: string
  title: string
  quote: string
  description: string
  icon: string
}

export interface RepositoryItem {
  name: string
  description: string
  language: string
  languageColor: string
  stars: number
  forks: number
  url: string
  topics: string[]
}

export interface NavigationItem {
  name: string
  href: string
  isAnchor?: boolean
}
