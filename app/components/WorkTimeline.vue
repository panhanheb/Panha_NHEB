<template>
  <section id="experience" class="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref="sectionRef">
    <!-- Anchor for #timeline -->
    <div id="timeline" class="absolute -top-20"></div>

    <div class="transition-all duration-700 ease-out"
         :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
      
      <!-- Section Header -->
      <div class="max-w-2xl mb-12 sm:mb-16">
        <span class="text-xs font-mono font-bold tracking-widest uppercase text-cyan-600 dark:text-cyan-400 block mb-2">
          Career Trajectory
        </span>
        <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          Professional Experience.
        </h2>
        <p class="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Chronological breakdown of mobile engineering roles, web applications development, and technical project deliveries.
        </p>
      </div>

      <!-- Vertical Timeline Track -->
      <div class="relative pl-6 sm:pl-8 border-l border-slate-200 dark:border-slate-800 space-y-10 sm:space-y-12">
        
        <div v-for="(item, index) in experienceList" :key="index"
             class="relative group">
          
          <!-- Timeline Node Bullet -->
          <div class="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-cyan-500 group-hover:scale-125 transition-transform duration-200 shadow-sm"></div>

          <!-- Content Card -->
          <div class="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 hover:border-cyan-500/30 transition-all">
            
            <!-- Header Row -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
              <div>
                <h3 class="text-lg font-bold text-slate-900 dark:text-white">
                  {{ item.role }}
                </h3>
                <p class="text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                  {{ item.organization }} • <span class="font-normal text-slate-500 dark:text-slate-400">{{ item.location }}</span>
                </p>
              </div>

              <span class="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 w-fit">
                {{ item.dates }}
              </span>
            </div>

            <!-- Summary -->
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {{ item.summary }}
            </p>

            <!-- Responsibilities & Verified Contributions -->
            <div class="space-y-2 pt-1">
              <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Key Responsibilities & Deliverables
              </span>
              <ul class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-2">
                <li v-for="(resp, rIdx) in item.responsibilities" :key="rIdx" class="flex items-start gap-2">
                  <span class="material-symbols-outlined text-xs text-cyan-500 mt-0.5 shrink-0">check</span>
                  <span>{{ resp }}</span>
                </li>
              </ul>
            </div>

            <!-- Tech Stack Tags -->
            <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
              <span v-for="t in item.technologies" :key="t"
                    class="px-2.5 py-1 rounded-md bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 text-[10px] font-mono font-semibold text-slate-700 dark:text-slate-300">
                {{ t }}
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { useScrollAnimate } from '~/composables/useScrollAnimate'

const { sectionRef, isVisible } = useScrollAnimate(0.1)

const experienceList = [
  {
    role: 'Flutter Developer | Mobile App Architect',
    organization: 'Client Solutions & Mobile Engineering',
    location: 'Phnom Penh, Cambodia',
    dates: '2024 — Present',
    summary: 'Developing production cross-platform mobile applications with Flutter and Dart, focusing on Clean Architecture, BLoC state management, and real-time backend synchronization.',
    responsibilities: [
      'Engineered cross-platform mobile features for logistics (Red Ant Express), product discovery, and service booking systems.',
      'Applied Clean Architecture principles separating Presentation, Domain, and Data layers to ensure clean unit testing and long-term maintainability.',
      'Integrated real-time database listeners and Row-Level Security (RLS) policies in Supabase PostgreSQL and Firebase Auth.',
      'Implemented offline-first caching strategies with SQLite and Hive to guarantee uninterrupted user experience during network drops.'
    ],
    technologies: ['Flutter', 'Dart', 'BLoC / Cubit', 'Supabase', 'PostgreSQL', 'Firebase', 'REST APIs', 'Git']
  },
  {
    role: 'Full-Stack Application Developer',
    organization: 'Web & Business Systems',
    location: 'Phnom Penh, Cambodia',
    dates: '2023 — 2024',
    summary: 'Constructed responsive web interfaces and serverless API endpoints using Vue 3, Nuxt, and relational database systems.',
    responsibilities: [
      'Developed responsive single-page and server-side rendered web applications in Vue 3 and Nuxt with Tailwind CSS styling.',
      'Designed RESTful API endpoints with request validation, structured error codes, and cloud database operations.',
      'Modelled PostgreSQL database schemas, indexing frequent query lookups, and enforcing database integrity constraints.',
      'Built notification webhooks and automated messaging telemetry triggers with the Telegram Bot API.'
    ],
    technologies: ['Vue 3', 'Nuxt', 'TypeScript', 'PostgreSQL', 'SQL', 'Tailwind CSS', 'Nitro API']
  },
  {
    role: 'Software Engineering & Academic Projects',
    organization: 'Software Engineering Studies',
    location: 'Phnom Penh, Cambodia',
    dates: '2022 — 2023',
    summary: 'Completed structured software engineering coursework and built real-world academic projects including small business accounting ledger software.',
    responsibilities: [
      'Designed and delivered an SME accounting management platform featuring double-entry ledgers, financial reporting, and tax calculations.',
      'Mentored peer students in object-oriented programming fundamentals, data structures, and relational database modeling.',
      'Collaborated on agile software development assignments, practicing version control workflows with Git and GitHub.'
    ],
    technologies: ['Dart', 'Java', 'SQL', 'Vue 3', 'Data Structures', 'Git', 'Clean Code']
  }
]
</script>
