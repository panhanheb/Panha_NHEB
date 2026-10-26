<template>
  <div v-if="project" class="py-24 sm:py-32 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
    
    <!-- Breadcrumb & Back Link -->
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2 text-xs font-mono text-slate-500">
        <NuxtLink to="/" class="hover:text-cyan-500 transition-colors">Home</NuxtLink>
        <span>/</span>
        <NuxtLink to="/projects" class="hover:text-cyan-500 transition-colors">Projects</NuxtLink>
        <span>/</span>
        <span class="text-cyan-600 dark:text-cyan-400 font-semibold truncate">{{ project.title }}</span>
      </div>

      <NuxtLink to="/projects" class="text-xs font-semibold text-slate-500 hover:text-cyan-500 flex items-center gap-1 transition-colors">
        <span class="material-symbols-outlined text-sm">arrow_back</span>
        <span>All Projects</span>
      </NuxtLink>
    </div>

    <!-- Case Study Hero Header -->
    <div class="space-y-6">
      <div class="flex flex-wrap items-center gap-2.5">
        <span class="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
          {{ project.category }}
        </span>
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border"
              :class="project.status === 'Production' || project.status === 'Released'
                ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400' 
                : 'bg-indigo-500/10 border-indigo-500/20 text-indigo-600 dark:text-indigo-400'">
          <span class="w-1.5 h-1.5 rounded-full" :class="project.status === 'Production' || project.status === 'Released' ? 'bg-emerald-400' : 'bg-indigo-400'"></span>
          {{ project.status }}
        </span>
        <span class="text-xs font-mono text-slate-400">• {{ project.timeline }}</span>
      </div>

      <h1 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
        {{ project.title }}
      </h1>

      <p class="text-lg sm:text-xl font-medium text-cyan-600 dark:text-cyan-400 leading-relaxed">
        {{ project.subtitle }}
      </p>

      <p class="text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
        {{ project.tagline }}
      </p>

      <!-- Key Metadata Strip -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-xs">
        <div>
          <span class="text-slate-400 font-mono uppercase block text-[10px] mb-1">My Role</span>
          <span class="font-bold text-slate-800 dark:text-slate-200">{{ project.role }}</span>
        </div>
        <div>
          <span class="text-slate-400 font-mono uppercase block text-[10px] mb-1">Architecture</span>
          <span class="font-bold text-slate-800 dark:text-slate-200">{{ project.architecture.pattern }}</span>
        </div>
        <div>
          <span class="text-slate-400 font-mono uppercase block text-[10px] mb-1">Status</span>
          <span class="font-bold text-slate-800 dark:text-slate-200">{{ project.status }}</span>
        </div>
        <div>
          <span class="text-slate-400 font-mono uppercase block text-[10px] mb-1">Timeline</span>
          <span class="font-bold text-slate-800 dark:text-slate-200">{{ project.timeline }}</span>
        </div>
      </div>

      <!-- Links -->
      <div v-if="project.githubUrl || project.liveUrl" class="flex flex-wrap items-center gap-3 pt-2">
        <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noopener noreferrer"
           class="btn-secondary text-xs">
          <Icon name="logos:github-icon" class="text-base" />
          <span>Source Code</span>
          <span class="material-symbols-outlined text-sm">open_in_new</span>
        </a>
        <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener noreferrer"
           class="btn-primary text-xs">
          <span>Live Deployment</span>
          <span class="material-symbols-outlined text-sm">open_in_new</span>
        </a>
      </div>
    </div>

    <!-- Tech Stack Pill Bar -->
    <div class="space-y-3">
      <span class="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">
        Technologies Applied
      </span>
      <div class="flex flex-wrap gap-2">
        <span v-for="tech in project.technologies" :key="tech"
              class="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80">
          {{ tech }}
        </span>
      </div>
    </div>

    <!-- Section: Overview & Problem Solved -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
        <div class="flex items-center gap-2 text-cyan-500 font-bold text-sm">
          <span class="material-symbols-outlined text-xl">info</span>
          <span>Project Overview</span>
        </div>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {{ project.overview }}
        </p>
      </div>

      <div class="p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
        <div class="flex items-center gap-2 text-indigo-500 font-bold text-sm">
          <span class="material-symbols-outlined text-xl">psychology_alt</span>
          <span>The Problem Solved</span>
        </div>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {{ project.problem }}
        </p>
      </div>
    </div>

    <!-- Section: Architecture & Layers -->
    <div class="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
      <div class="space-y-2">
        <span class="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 block">
          SYSTEM ARCHITECTURE
        </span>
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white">
          {{ project.architecture.pattern }}
        </h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {{ project.architecture.description }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <div v-for="layer in project.architecture.layers" :key="layer.name"
             class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 space-y-2">
          <span class="w-2 h-2 rounded-full bg-cyan-400 block"></span>
          <h3 class="font-bold text-sm text-slate-900 dark:text-white">{{ layer.name }}</h3>
          <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{{ layer.role }}</p>
        </div>
      </div>
    </div>

    <!-- Section: Goals & My Contribution -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Goals -->
      <div class="p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <h3 class="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
          <span class="material-symbols-outlined text-emerald-500 text-lg">flag</span>
          <span>Engineering Goals</span>
        </h3>
        <ul class="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          <li v-for="(goal, i) in project.goals" :key="i" class="flex items-start gap-2.5">
            <span class="text-emerald-500 mt-1 shrink-0">•</span>
            <span>{{ goal }}</span>
          </li>
        </ul>
      </div>

      <!-- My Contribution -->
      <div class="p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <h3 class="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
          <span class="material-symbols-outlined text-cyan-500 text-lg">handyman</span>
          <span>Key Contributions</span>
        </h3>
        <ul class="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          <li v-for="(item, i) in project.contribution" :key="i" class="flex items-start gap-2.5">
            <span class="text-cyan-500 mt-1 shrink-0">•</span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Section: Key Features -->
    <div class="space-y-6">
      <div class="space-y-1">
        <span class="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">
          FUNCTIONALITY
        </span>
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white">
          Key Features & Workflow Highlights
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="feat in project.keyFeatures" :key="feat.title"
             class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
          <h3 class="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
            <span class="material-symbols-outlined text-cyan-500 text-base">check_circle</span>
            <span>{{ feat.title }}</span>
          </h3>
          <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            {{ feat.description }}
          </p>
        </div>
      </div>
    </div>

    <!-- Section: Challenges & Technical Solutions -->
    <div class="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
      <div class="space-y-1">
        <span class="text-xs font-mono font-bold uppercase tracking-wider text-rose-500 block">
          OVERCOMING HURDLES
        </span>
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white">
          Technical Challenges & Solutions
        </h2>
      </div>

      <div class="space-y-4">
        <div v-for="(item, i) in project.challenges" :key="i"
             class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 space-y-2">
          <div class="flex items-start gap-2 text-rose-500 text-xs font-bold uppercase font-mono">
            <span>Challenge:</span>
            <span class="text-slate-800 dark:text-slate-200 normal-case font-normal">{{ item.challenge }}</span>
          </div>
          <div class="flex items-start gap-2 text-emerald-500 text-xs font-bold uppercase font-mono pt-1">
            <span>Solution:</span>
            <span class="text-slate-700 dark:text-slate-300 normal-case font-normal">{{ item.solution }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Section: Lessons Learned -->
    <div class="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 space-y-4">
      <h3 class="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
        <span class="material-symbols-outlined text-amber-500 text-lg">lightbulb</span>
        <span>Key Takeaways & Lessons Learned</span>
      </h3>
      <ul class="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
        <li v-for="(lesson, i) in project.lessonsLearned" :key="i" class="flex items-start gap-2.5">
          <span class="text-amber-500 mt-1 shrink-0">•</span>
          <span>{{ lesson }}</span>
        </li>
      </ul>
    </div>

    <!-- Previous / Next Project Navigation -->
    <div class="pt-8 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
      <NuxtLink v-if="prevProject" :to="`/projects/${prevProject.slug}`"
                class="group p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs hover:border-cyan-500/40 transition-all max-w-[45%]">
        <span class="text-[10px] text-slate-400 font-mono block mb-1 flex items-center gap-1">
          <span class="material-symbols-outlined text-xs">arrow_back</span>
          <span>Previous Project</span>
        </span>
        <span class="font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors truncate block">
          {{ prevProject.title }}
        </span>
      </NuxtLink>
      <div v-else></div>

      <NuxtLink v-if="nextProject" :to="`/projects/${nextProject.slug}`"
                class="group p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs hover:border-cyan-500/40 transition-all max-w-[45%] text-right ml-auto">
        <span class="text-[10px] text-slate-400 font-mono block mb-1 flex items-center justify-end gap-1">
          <span>Next Project</span>
          <span class="material-symbols-outlined text-xs">arrow_forward</span>
        </span>
        <span class="font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors truncate block">
          {{ nextProject.title }}
        </span>
      </NuxtLink>
    </div>

  </div>

  <!-- Fallback if not found -->
  <div v-else class="py-32 text-center max-w-md mx-auto px-4 space-y-4">
    <span class="material-symbols-outlined text-6xl text-slate-400">inventory_2</span>
    <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Case Study Not Found</h1>
    <p class="text-xs text-slate-500">
      The project case study you requested could not be located.
    </p>
    <NuxtLink to="/projects" class="btn-primary text-xs">
      <span>Return to Projects Catalog</span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { projectsData } from '~/data/projects'

const route = useRoute()
const slug = computed(() => route.params.slug as string)

const projectIndex = computed(() => {
  return projectsData.findIndex(p => p.slug === slug.value)
})

const project = computed(() => {
  return projectIndex.value !== -1 ? projectsData[projectIndex.value] : null
})

const prevProject = computed(() => {
  if (projectIndex.value > 0) {
    return projectsData[projectIndex.value - 1]
  }
  return null
})

const nextProject = computed(() => {
  if (projectIndex.value !== -1 && projectIndex.value < projectsData.length - 1) {
    return projectsData[projectIndex.value + 1]
  }
  return null
})

useHead(() => ({
  title: project.value ? `${project.value.title} | Case Study by Nheb Panha` : 'Case Study | Nheb Panha',
  meta: [
    { 
      name: 'description', 
      content: project.value ? project.value.overview : 'Detailed mobile and full-stack software engineering case study by Nheb Panha.' 
    }
  ]
}))
</script>
