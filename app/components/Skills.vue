<template>
  <section id="skills" class="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref="sectionRef">
    
    <div class="transition-all duration-700 ease-out"
         :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
      
      <!-- Section Header -->
      <div class="max-w-2xl mb-12 sm:mb-16">
        <span class="text-xs font-mono font-bold tracking-widest uppercase text-cyan-600 dark:text-cyan-400 block mb-2">
          Technical Capabilities
        </span>
        <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          Core Skills & Technologies.
        </h2>
        <p class="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          A structured breakdown of technologies, frameworks, and engineering practices applied across production mobile and web projects.
        </p>
      </div>

      <!-- Categories Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        
        <!-- 1. Mobile Development -->
        <div class="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
          <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                <span class="material-symbols-outlined text-xl">smartphone</span>
              </div>
              <div>
                <h3 class="font-bold text-base text-slate-900 dark:text-white">Mobile Development</h3>
                <p class="text-xs text-slate-500 dark:text-slate-400">Cross-Platform iOS & Android</p>
              </div>
            </div>
            <span class="text-[10px] font-mono font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full">
              Core Specialty
            </span>
          </div>

          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Developing high-performance, responsive mobile applications with smooth 60fps animations, native hardware access, and robust offline capability.
          </p>

          <div class="flex flex-wrap gap-2">
            <div v-for="skill in mobileSkills" :key="skill.name"
                 class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200">
              <Icon :name="skill.icon" class="text-sm shrink-0" />
              <span>{{ skill.name }}</span>
            </div>
          </div>
        </div>

        <!-- 2. Architecture & Engineering -->
        <div class="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
          <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <span class="material-symbols-outlined text-xl">account_tree</span>
              </div>
              <div>
                <h3 class="font-bold text-base text-slate-900 dark:text-white">Architecture & Engineering</h3>
                <p class="text-xs text-slate-500 dark:text-slate-400">Code Organization & Patterns</p>
              </div>
            </div>
            <span class="text-[10px] font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full">
              Maintainability
            </span>
          </div>

          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Separating concerns across domain logic, data models, and presentation layers to keep codebases testable, extensible, and free of regression bugs.
          </p>

          <div class="flex flex-wrap gap-2">
            <div v-for="skill in architectureSkills" :key="skill.name"
                 class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200">
              <span class="material-symbols-outlined text-sm text-indigo-500">{{ skill.icon }}</span>
              <span>{{ skill.name }}</span>
            </div>
          </div>
        </div>

        <!-- 3. Backend & Database -->
        <div class="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
          <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <span class="material-symbols-outlined text-xl">database</span>
              </div>
              <div>
                <h3 class="font-bold text-base text-slate-900 dark:text-white">Backend & Database</h3>
                <p class="text-xs text-slate-500 dark:text-slate-400">Cloud Sync & Persistence</p>
              </div>
            </div>
            <span class="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">
              Real-Time
            </span>
          </div>

          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Managing relational PostgreSQL data, Row-Level Security policies, user authentication pipelines, and real-time subscription channels.
          </p>

          <div class="flex flex-wrap gap-2">
            <div v-for="skill in backendSkills" :key="skill.name"
                 class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200">
              <Icon :name="skill.icon" class="text-sm shrink-0" />
              <span>{{ skill.name }}</span>
            </div>
          </div>
        </div>

        <!-- 4. Web Development -->
        <div class="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
          <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                <span class="material-symbols-outlined text-xl">language</span>
              </div>
              <div>
                <h3 class="font-bold text-base text-slate-900 dark:text-white">Web Development</h3>
                <p class="text-xs text-slate-500 dark:text-slate-400">Full-Stack & Reactive Interfaces</p>
              </div>
            </div>
            <span class="text-[10px] font-mono font-bold text-sky-600 dark:text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded-full">
              Full-Stack
            </span>
          </div>

          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Building accessible web interfaces, serverless API proxies, admin panels, and interactive dashboards using modern Vue/Nuxt tooling.
          </p>

          <div class="flex flex-wrap gap-2">
            <div v-for="skill in webSkills" :key="skill.name"
                 class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200">
              <Icon :name="skill.icon" class="text-sm shrink-0" />
              <span>{{ skill.name }}</span>
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

const mobileSkills = [
  { name: 'Flutter', icon: 'logos:flutter' },
  { name: 'Dart', icon: 'logos:dart' },
  { name: 'BLoC / Cubit', icon: 'logos:flutter' },
  { name: 'Provider', icon: 'logos:flutter' },
  { name: 'Riverpod', icon: 'logos:flutter' },
  { name: 'Responsive Mobile UI', icon: 'material-symbols:devices' },
  { name: 'Platform Integration', icon: 'material-symbols:settings-cell' }
]

const architectureSkills = [
  { name: 'Clean Architecture', icon: 'layers' },
  { name: 'Modular Design', icon: 'grid_view' },
  { name: 'State Management', icon: 'sync' },
  { name: 'REST API Integration', icon: 'api' },
  { name: 'Error Handling', icon: 'shield' },
  { name: 'Maintainable Code', icon: 'code' }
]

const backendSkills = [
  { name: 'Supabase', icon: 'logos:supabase-icon' },
  { name: 'Firebase', icon: 'logos:firebase' },
  { name: 'PostgreSQL', icon: 'logos:postgresql' },
  { name: 'SQL', icon: 'logos:mysql-icon' },
  { name: 'Authentication', icon: 'material-symbols:lock' },
  { name: 'Database Integration', icon: 'material-symbols:storage' }
]

const webSkills = [
  { name: 'Vue 3', icon: 'logos:vue' },
  { name: 'Nuxt 4', icon: 'logos:nuxt-icon' },
  { name: 'TypeScript', icon: 'logos:typescript-icon' },
  { name: 'Java', icon: 'logos:java' },
  { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' }
]
</script>