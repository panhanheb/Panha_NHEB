import type { SkillCategory } from '~/types'

export const skillCategories: SkillCategory[] = [
  {
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications, state engines, and platform channels.',
    skills: [
      { name: 'Flutter', category: 'Mobile', icon: 'logos:flutter', description: 'Cross-platform UI framework for Android & iOS', isCore: true },
      { name: 'Dart', category: 'Mobile', icon: 'logos:dart', description: 'Strongly-typed object-oriented language for Flutter', isCore: true },
      { name: 'BLoC & Cubit', category: 'Mobile', icon: 'material-symbols:account-tree', description: 'Predictable reactive state management architecture', isCore: true },
      { name: 'Provider', category: 'Mobile', icon: 'material-symbols:sync-alt', description: 'Dependency injection & state listener management' },
      { name: 'Riverpod', category: 'Mobile', icon: 'material-symbols:water-drop', description: 'Compile-safe, modular state management system' }
    ]
  },
  {
    title: 'Backend and Database',
    description: 'Cloud databases, authentication providers, and REST API integrations.',
    skills: [
      { name: 'Supabase', category: 'Backend', icon: 'logos:supabase-icon', description: 'PostgreSQL, Row Level Security & real-time sync', isCore: true },
      { name: 'Firebase', category: 'Backend', icon: 'logos:firebase', description: 'Cloud Firestore, Auth, FCM, and Crashlytics', isCore: true },
      { name: 'REST APIs', category: 'Backend', icon: 'material-symbols:api', description: 'HTTP clients, payload serialization, and error handling', isCore: true },
      { name: 'PostgreSQL', category: 'Backend', icon: 'logos:postgresql', description: 'Relational database schema, indexing, and RLS' },
      { name: 'SQL & MySQL', category: 'Backend', icon: 'logos:mysql', description: 'Query design, relationships, and data integrity' }
    ]
  },
  {
    title: 'Web Development',
    description: 'Modern frontend frameworks, responsive interfaces, and type safety.',
    skills: [
      { name: 'Vue.js 3', category: 'Web', icon: 'logos:vue', description: 'Composition API, reactive refs, and component architecture', isCore: true },
      { name: 'Nuxt 4', category: 'Web', icon: 'logos:nuxt-icon', description: 'Full-stack SSR/SSG framework with Nitro server engine', isCore: true },
      { name: 'TypeScript', category: 'Web', icon: 'logos:typescript-icon', description: 'Static type checking and robust interface design', isCore: true },
      { name: 'JavaScript', category: 'Web', icon: 'logos:javascript', description: 'Modern ES6+ asynchronous web development' },
      { name: 'Tailwind CSS', category: 'Web', icon: 'logos:tailwindcss-icon', description: 'Utility-first responsive styling and design systems' }
    ]
  },
  {
    title: 'Architecture and Engineering',
    description: 'Software design principles ensuring maintainability and clean boundaries.',
    skills: [
      { name: 'Clean Architecture', category: 'Architecture', icon: 'material-symbols:layers', description: 'Strict separation into Presentation, Domain, and Data', isCore: true },
      { name: 'SOLID Principles', category: 'Architecture', icon: 'material-symbols:architecture', description: 'Object-oriented maintainability and extensibility', isCore: true },
      { name: 'Separation of Concerns', category: 'Architecture', icon: 'material-symbols:call-split', description: 'Isolating business logic from UI rendering engines' },
      { name: 'Reusable Components', category: 'Architecture', icon: 'material-symbols:widgets', description: 'Modular, composable design system elements' },
      { name: 'State Management', category: 'Architecture', icon: 'material-symbols:flowsheet', description: 'Deterministic unidirectional event and data flow' }
    ]
  },
  {
    title: 'Tools and Design',
    description: 'Engineering workflows, developer toolchains, and UI prototyping.',
    skills: [
      { name: 'Git & GitHub', category: 'Tools', icon: 'logos:git-icon', description: 'Version control, feature branching, and PR workflows', isCore: true },
      { name: 'VS Code', category: 'Tools', icon: 'logos:visual-studio-code', description: 'Primary developer workspace with Dart & Vue extensions' },
      { name: 'Android Studio', category: 'Tools', icon: 'logos:android-icon', description: 'Android build toolchains, Gradle, and emulators' },
      { name: 'Xcode', category: 'Tools', icon: 'logos:apple', description: 'iOS simulation, certificates, and provisioning profiles' },
      { name: 'Figma', category: 'Tools', icon: 'logos:figma', description: 'UI/UX design inspection and asset export' }
    ]
  }
]
