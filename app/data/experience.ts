import type { ExperienceItem, EducationItem } from '~/types'

export const professionalExperience: ExperienceItem[] = [
  {
    id: 'turbotech',
    role: 'Flutter Developer & Mobile Engineer',
    company: 'TurboTech',
    period: '2025–Present',
    location: 'Phnom Penh, Cambodia',
    type: 'Professional',
    focus: [
      'Engineering and maintaining cross-platform mobile applications in Flutter and Dart.',
      'Refactoring existing modules toward Clean Architecture to ensure long-term codebase maintainability.',
      'Integrating RESTful backend APIs, payload serialization, and defensive error handling.',
      'Implementing fluid, responsive UI components adhering to mobile design systems.',
      'Managing application state with BLoC and Cubit for deterministic view transitions.',
      'Conducting performance profiling, memory optimization, and iterative bug triage.'
    ],
    technologies: ['Flutter', 'Dart', 'BLoC', 'REST APIs', 'Supabase', 'Git']
  },
  {
    id: 'etec-center',
    role: 'Programming Instructor & Mentor',
    company: 'ETEC Center',
    period: '2022–Present',
    location: 'Phnom Penh, Cambodia',
    type: 'Instructional',
    focus: [
      'Teaching short-term professional courses in modern software programming and mobile engineering.',
      'Guiding aspiring developers through programming fundamentals, object-oriented principles, and Java.',
      'Leading hands-on workshops covering web technologies, UI structuring, and mobile application fundamentals.',
      'Mentoring students through real-world software debugging, coding best practices, and project structuring.'
    ],
    technologies: ['Java', 'Dart', 'Flutter', 'Web Technologies', 'SQL', 'OOP']
  }
]

export const educationHistory: EducationItem[] = [
  {
    id: 'rupp',
    institution: 'Royal University of Phnom Penh (RUPP)',
    degree: "Bachelor's Studies in Information Technology & Computer Science",
    period: '2021–Present',
    status: 'In Progress',
    details: 'Focused on software engineering fundamentals, database systems, algorithm analysis, computer networks, and full-stack software development methodologies.'
  },
  {
    id: 'nenu',
    institution: 'Northeast Normal University (NENU)',
    degree: 'Academic Preparation Course',
    period: '2020–2021',
    status: 'Completed',
    details: 'Completed foundational coursework in higher mathematics, computational logic, and language preparation.'
  },
  {
    id: 'high-school',
    institution: 'Hun Sen Cha Thmey High School',
    degree: 'High School Diploma (Grades 10–12)',
    period: '2017–2020',
    status: 'Completed',
    details: 'General secondary education emphasizing STEM, mathematics, and natural sciences.'
  }
]
