<template>
  <div class="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
    
    <!-- Breadcrumb & Back Link -->
    <div class="flex items-center gap-2 text-xs font-mono text-slate-500">
      <NuxtLink to="/" class="hover:text-cyan-500 transition-colors">Home</NuxtLink>
      <span>/</span>
      <span class="text-cyan-600 dark:text-cyan-400 font-semibold">Projects</span>
    </div>

    <!-- Header Section -->
    <div class="max-w-3xl space-y-4">
      <span class="text-xs font-mono font-bold tracking-widest uppercase text-cyan-600 dark:text-cyan-400 block">
        SELECTED WORK
      </span>
      <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
        Projects Built With Purpose.
      </h1>
      <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
        A selection of mobile applications and technical projects that reflect my interest in practical problem-solving, scalable systems, and thoughtful user experiences.
      </p>
    </div>

    <!-- Controls: Filter & Search -->
    <div class="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center pb-6 border-b border-slate-200 dark:border-slate-800">
      <!-- Category Tabs -->
      <div class="flex flex-wrap gap-2">
        <button v-for="cat in categories" :key="cat" @click="selectedCategory = cat"
                :class="[
                  'px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 whitespace-nowrap',
                  selectedCategory === cat
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                ]">
          {{ cat }}
        </button>
      </div>

      <!-- Search Input -->
      <div class="relative w-full sm:w-72">
        <span class="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-base">search</span>
        <input v-model="searchQuery" 
               type="text" 
               placeholder="Search by title, tech or tag..." 
               class="w-full pl-10 pr-9 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 transition-colors" />
        <button v-if="searchQuery" @click="searchQuery = ''" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white">
          <span class="material-symbols-outlined text-sm">close</span>
        </button>
      </div>
    </div>

    <!-- Projects Grid -->
    <div v-if="filteredProjects.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <div v-for="project in filteredProjects" :key="project.slug"
           class="group rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden">
        
        <div class="p-7 space-y-4">
          <!-- Badges -->
          <div class="flex items-center justify-between gap-2">
            <span class="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              {{ project.category }}
            </span>
            <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold border"
                  :class="project.status === 'Production' || project.status === 'Released'
                    ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400' 
                    : 'bg-indigo-500/10 border-indigo-500/20 text-indigo-600 dark:text-indigo-400'">
              <span class="w-1.5 h-1.5 rounded-full" :class="project.status === 'Production' || project.status === 'Released' ? 'bg-emerald-400' : 'bg-indigo-400'"></span>
              {{ project.status }}
            </span>
          </div>

          <!-- Titles -->
          <div class="space-y-1">
            <NuxtLink :to="`/projects/${project.slug}`"
                      class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors block">
              {{ project.title }}
            </NuxtLink>
            <p class="text-xs font-semibold text-cyan-600 dark:text-cyan-400">
              {{ project.subtitle }}
            </p>
          </div>

          <!-- Description -->
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
            {{ project.overview }}
          </p>

          <!-- Role & Architecture Box -->
          <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 text-xs space-y-1.5">
            <div class="flex items-center justify-between text-slate-500 dark:text-slate-400">
              <span>My Role</span>
              <span class="font-semibold text-slate-800 dark:text-slate-200">{{ project.role }}</span>
            </div>
            <div class="flex items-center justify-between text-slate-500 dark:text-slate-400">
              <span>Architecture</span>
              <span class="font-semibold text-slate-800 dark:text-slate-200">{{ project.architecture.pattern }}</span>
            </div>
          </div>

          <!-- Tech Tags -->
          <div class="flex flex-wrap gap-1.5 pt-1">
            <span v-for="tech in project.technologies" :key="tech"
                  class="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[11px] font-medium text-slate-700 dark:text-slate-300">
              {{ tech }}
            </span>
          </div>
        </div>

        <!-- Footer -->
        <div class="p-6 pt-0 border-t border-slate-100 dark:border-slate-800/80 mt-auto flex items-center justify-between gap-3 text-xs">
          <NuxtLink :to="`/projects/${project.slug}`"
                    class="font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 inline-flex items-center gap-1 group/link">
            <span>Explore Case Study</span>
            <span class="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
          </NuxtLink>

          <span class="text-[11px] font-mono text-slate-400">{{ project.timeline }}</span>
        </div>

      </div>

    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-20 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
      <span class="material-symbols-outlined text-5xl text-slate-400">search_off</span>
      <h3 class="text-lg font-bold text-slate-900 dark:text-white">No projects match your filter</h3>
      <p class="text-xs text-slate-500 max-w-sm mx-auto">
        Try modifying your search keywords or switching to "All" categories.
      </p>
      <button @click="resetFilters" class="btn-secondary text-xs mt-2">
        Reset All Filters
      </button>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { projectsData } from '~/data/projects'

useHead({
  title: 'Projects & Case Studies | Nheb Panha',
  meta: [
    { name: 'description', content: 'Production mobile applications, booking systems, computer vision systems, and full-stack solutions built with Flutter, Dart, Supabase, and Clean Architecture.' }
  ]
})

const categories = [
  'All',
  'Mobile Applications',
  'Backend and Integration',
  'Web Development',
  'Academic Projects'
]

const selectedCategory = ref('All')
const searchQuery = ref('')

const filteredProjects = computed(() => {
  return projectsData.filter(project => {
    const matchesCategory = selectedCategory.value === 'All' || project.category === selectedCategory.value
    const query = searchQuery.value.toLowerCase().trim()
    const matchesSearch = !query || 
      project.title.toLowerCase().includes(query) ||
      project.subtitle.toLowerCase().includes(query) ||
      project.technologies.some(t => t.toLowerCase().includes(query)) ||
      project.overview.toLowerCase().includes(query)
    
    return matchesCategory && matchesSearch
  })
})

const resetFilters = () => {
  selectedCategory.value = 'All'
  searchQuery.value = ''
}
</script>
