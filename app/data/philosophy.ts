import type { PhilosophyItem } from '~/types'

export const philosophyItems: PhilosophyItem[] = [
  {
    id: 'clean-architecture',
    title: 'Clean Architecture',
    quote: 'Structure applications so responsibilities are clear, code is maintainable, and features can evolve without unnecessary complexity.',
    description: 'Separating business logic from UI frameworks shields the application from third-party churn and ensures testability.',
    icon: 'layers'
  },
  {
    id: 'user-centered-design',
    title: 'User-Centered Design',
    quote: 'Software should be intuitive, responsive, and designed around the people who use it.',
    description: 'Every interaction, transition, and loading state is crafted to provide immediate, meaningful feedback to the user.',
    icon: 'touch_app'
  },
  {
    id: 'reliable-integrations',
    title: 'Reliable Integrations',
    quote: 'Focus on integrating APIs, databases, and backend services with clear error handling and predictable application behavior.',
    description: 'Defensive programming, graceful network fallbacks, and typed schemas prevent silent client-side failures.',
    icon: 'hub'
  },
  {
    id: 'continuous-learning',
    title: 'Continuous Learning',
    quote: 'Continuously explore new tools, improve engineering practices, and learn from real-world development challenges.',
    description: 'Technology evolves rapidly. Growth comes from practical project delivery, constant curiosity, and sharing knowledge.',
    icon: 'school'
  }
]
