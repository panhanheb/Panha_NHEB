<template>
  <section id="projects" class="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref="sectionRef">
    <div id="portfolio" class="absolute -top-20"></div>

    <div class="transition-all duration-700 ease-out"
         :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div class="max-w-2xl">
          <span class="text-xs font-mono font-bold tracking-widest uppercase text-cyan-600 dark:text-cyan-400 block mb-2">
            SELECTED WORK
          </span>
          <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Projects Built With Purpose.
          </h2>
        </div>

        <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-md leading-relaxed">
          A selection of mobile applications and technical projects that reflect my interest in practical problem-solving, scalable systems, and thoughtful user experiences.
        </p>
      </div>

      <!-- Controls: Category Filter Tabs & Search -->
      <div class="flex flex-col sm:flex-row gap-3 justify-between items-stretch sm:items-center mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">
        
        <!-- Category Filter Tabs -->
        <div class="flex flex-wrap gap-1.5">
          <button v-for="cat in categories" :key="cat" @click="selectedCategory = cat"
                  :class="[
                    'px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 whitespace-nowrap',
                    selectedCategory === cat
                      ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                  ]">
            {{ cat }}
          </button>
        </div>

        <!-- Search Box -->
        <div class="relative w-full sm:w-64">
          <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-base">search</span>
          <input v-model="searchQuery" 
                 type="text" 
                 placeholder="Search by title or tech..." 
                 class="w-full pl-9 pr-8 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 transition-colors" />
          <button v-if="searchQuery" @click="searchQuery = ''" class="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white">
            <span class="material-symbols-outlined text-sm">close</span>
          </button>
        </div>

      </div>

      <!-- Projects Grid -->
      <div v-if="filteredProjects.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        
        <div v-for="project in filteredProjects" :key="project.slug"
             class="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden">
          
          <div class="p-6 sm:p-7 space-y-4">
            <!-- Header Badges -->
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

            <!-- Title & Subtitle -->
            <div class="space-y-1">
              <NuxtLink :to="`/projects/${project.slug}`"
                        class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors block">
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

            <!-- Role & Architecture Hint -->
            <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 text-[11px] space-y-1">
              <div class="flex items-center justify-between text-slate-500 dark:text-slate-400">
                <span>Role</span>
                <span class="font-semibold text-slate-800 dark:text-slate-200">{{ project.role }}</span>
              </div>
              <div class="flex items-center justify-between text-slate-500 dark:text-slate-400">
                <span>Architecture</span>
                <span class="font-semibold text-slate-800 dark:text-slate-200">{{ project.architecture.pattern }}</span>
              </div>
            </div>

            <!-- Tech Pills -->
            <div class="flex flex-wrap gap-1.5 pt-1">
              <span v-for="tech in project.technologies.slice(0, 4)" :key="tech"
                    class="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[11px] font-medium text-slate-700 dark:text-slate-300">
                {{ tech }}
              </span>
              <span v-if="project.technologies.length > 4" class="px-2 py-1 text-[10px] text-slate-400 font-mono">
                +{{ project.technologies.length - 4 }}
              </span>
            </div>
          </div>

          <!-- Card Footer Actions -->
          <div class="p-4 sm:px-7 sm:pb-6 pt-0 border-t border-slate-100 dark:border-slate-800/80 mt-auto flex items-center justify-between gap-3 text-xs">
            <NuxtLink :to="`/projects/${project.slug}`"
                      class="font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 inline-flex items-center gap-1 group/link">
              <span>View Case Study</span>
              <span class="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
            </NuxtLink>

            <button @click="openModal(project)"
                    class="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    title="Quick Overview">
              <span class="material-symbols-outlined text-base">visibility</span>
            </button>
          </div>

        </div>

      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-16 p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
        <span class="material-symbols-outlined text-4xl text-slate-400">search_off</span>
        <h3 class="font-bold text-slate-900 dark:text-white">No matching projects found</h3>
        <p class="text-xs text-slate-500 max-w-sm mx-auto">
          Try clearing your search query or switching to "All" categories.
        </p>
        <button @click="resetFilters" class="btn-secondary text-xs mt-2">
          Reset Filter
        </button>
      </div>

      <!-- Bottom Link to Full Catalog -->
      <div class="mt-12 text-center">
        <NuxtLink to="/projects"
                  class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-cyan-500/10 text-slate-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 text-xs font-semibold border border-slate-200 dark:border-slate-700 hover:border-cyan-500/40 transition-all">
          <span>Explore All Project Case Studies & Architecture Guides</span>
          <span class="material-symbols-outlined text-sm">arrow_forward</span>
        </NuxtLink>
      </div>

    </div>

    <!-- Teleported Quick Details Modal -->
    <Teleport to="body">
      <div v-if="selectedProject" 
           class="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md overflow-y-auto"
           @click.self="selectedProject = null">
        
        <div class="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8">
          
          <!-- Modal Header -->
          <div class="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/40">
            <div>
              <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 block mb-1">
                {{ selectedProject.category }}
              </span>
              <h3 class="text-xl font-bold text-slate-900 dark:text-white">
                {{ selectedProject.title }}
              </h3>
            </div>
            <button @click="selectedProject = null" 
                    class="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <span class="material-symbols-outlined text-xl">close</span>
            </button>
          </div>

          <!-- Modal Body -->
          <div class="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
            
            <div class="space-y-2">
              <h4 class="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Overview</h4>
              <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {{ selectedProject.overview }}
              </p>
            </div>

            <div class="space-y-2">
              <h4 class="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Problem Addressed</h4>
              <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {{ selectedProject.problem }}
              </p>
            </div>

            <div class="space-y-2">
              <h4 class="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Architecture & Pattern</h4>
              <p class="text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                {{ selectedProject.architecture.pattern }}
              </p>
              <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {{ selectedProject.architecture.description }}
              </p>
            </div>

            <div class="space-y-2">
              <h4 class="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Technologies</h4>
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in selectedProject.technologies" :key="tech"
                      class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  {{ tech }}
                </span>
              </div>
            </div>

          </div>

          <!-- Modal Footer -->
          <div class="p-5 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 flex items-center justify-between">
            <NuxtLink :to="`/projects/${selectedProject.slug}`"
                      class="btn-primary text-xs"
                      @click="selectedProject = null">
              <span>Read Full Case Study</span>
              <span class="material-symbols-outlined text-sm">arrow_forward</span>
            </NuxtLink>

            <button @click="selectedProject = null" class="btn-secondary text-xs">
              Close
            </button>
          </div>

        </div>

      </div>
    </Teleport>

  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useScrollAnimate } from '~/composables/useScrollAnimate'
import { projectsData } from '~/data/projects'
import type { ProjectCaseStudy } from '~/types'

const { sectionRef, isVisible } = useScrollAnimate(0.1)

const categories = [
  'All',
  'Mobile Applications',
  'Backend and Integration',
  'Web Development',
  'Academic Projects'
]

const selectedCategory = ref('All')
const searchQuery = ref('')
const selectedProject = ref<ProjectCaseStudy | null>(null)

const filteredProjects = computed(() => {
  return projectsData.filter(project => {
    const matchesCategory = selectedCategory.value === 'All' || project.category === selectedCategory.value
    const query = searchQuery.value.toLowerCase().trim()
    const matchesSearch = !query || 
      project.title.toLowerCase().includes(query) ||
      project.subtitle.toLowerCase().includes(query) ||
      project.technologies.some(t => t.toLowerCase().includes(query))
    
    return matchesCategory && matchesSearch
  })
})

const openModal = (project: ProjectCaseStudy) => {
  selectedProject.value = project
}

const resetFilters = () => {
  selectedCategory.value = 'All'
  searchQuery.value = ''
}
</script>
