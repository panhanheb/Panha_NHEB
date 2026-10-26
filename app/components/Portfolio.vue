<template>
  <section id="projects" class="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref="sectionRef">
    <!-- Anchor for #portfolio -->
    <div id="portfolio" class="absolute -top-20"></div>

    <div class="transition-all duration-700 ease-out"
         :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div class="max-w-2xl">
          <div class="flex items-center gap-2.5 mb-2">
            <span class="text-xs font-mono font-bold tracking-widest uppercase text-cyan-600 dark:text-cyan-400">
              Featured Work
            </span>
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide border"
                  :class="dataSource === 'supabase' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400' : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'">
              <span class="w-1.5 h-1.5 rounded-full" :class="dataSource === 'supabase' ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'"></span>
              {{ dataSource === 'supabase' ? 'Supabase Live' : 'Verified Catalog' }}
            </span>
          </div>

          <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Projects & Case Studies.
          </h2>
        </div>

        <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-md leading-relaxed">
          Production mobile applications, booking systems, and full-stack solutions built with Flutter, Supabase, Firebase, and Clean Architecture.
        </p>
      </div>

      <!-- Controls: Search & Category Filter Tabs -->
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
      <div v-if="filteredProjects.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="project in filteredProjects" :key="project.id || project.title"
             class="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:border-cyan-500/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
          
          <div class="space-y-4">
            <!-- Card Header: Category & Status -->
            <div class="flex items-center justify-between">
              <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                {{ project.category }}
              </span>

              <span class="text-[10px] font-semibold px-2 py-0.5 rounded-md border flex items-center gap-1"
                    :class="project.status === 'Released' || project.status === 'Live Production' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400' : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400'">
                <span class="w-1.5 h-1.5 rounded-full" :class="project.status === 'Released' || project.status === 'Live Production' ? 'bg-emerald-500' : 'bg-slate-400'"></span>
                {{ project.status || 'Completed' }}
              </span>
            </div>

            <!-- Title & Icon -->
            <div class="flex items-start gap-3">
              <div class="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0">
                <Icon :name="project.icon" class="text-xl" />
              </div>
              <div>
                <h3 class="font-bold text-base text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {{ project.title }}
                </h3>
                <p v-if="project.metrics" class="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 font-medium">
                  {{ project.metrics }}
                </p>
              </div>
            </div>

            <!-- Description -->
            <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
              {{ project.description }}
            </p>

            <!-- Problem Solved Preview -->
            <div v-if="project.problem_solved" class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400">
              <strong class="text-slate-700 dark:text-slate-300 block mb-0.5">Problem Solved:</strong>
              <p class="line-clamp-2">{{ project.problem_solved }}</p>
            </div>
          </div>

          <!-- Bottom: Tech Stack & Details CTA -->
          <div class="pt-5 mt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
            <div class="flex flex-wrap gap-1.5">
              <span v-for="tag in (project.tags || []).slice(0, 4)" :key="tag.name"
                    class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold text-slate-700 dark:text-slate-300">
                <Icon :name="tag.icon" class="text-xs" />
                {{ tag.name }}
              </span>
            </div>

            <div class="flex items-center justify-between pt-1">
              <button @click="openModal(project)"
                      class="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1">
                <span>View Details</span>
                <span class="material-symbols-outlined text-sm">open_in_new</span>
              </button>

              <div class="flex items-center gap-2">
                <a v-if="project.github_url && project.github_url !== '#'" :href="project.github_url" target="_blank"
                   class="w-7 h-7 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                   title="GitHub Repository">
                  <Icon name="logos:github-icon" class="text-sm" />
                </a>
                <a v-if="project.demo_url && project.demo_url !== '#'" :href="project.demo_url" target="_blank"
                   class="w-7 h-7 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                   title="Live Demo">
                  <span class="material-symbols-outlined text-sm">launch</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-16 p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <span class="material-symbols-outlined text-4xl text-slate-400 mb-2">search_off</span>
        <h4 class="text-base font-bold text-slate-900 dark:text-white mb-1">No Projects Found</h4>
        <p class="text-xs text-slate-500 mb-4">No projects matched your active search query or filter.</p>
        <button @click="resetFilters" class="btn-secondary text-xs">
          Reset Filter
        </button>
      </div>

    </div>

    <!-- Project Details Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="activeModalProject" class="fixed inset-0 z-[999] flex items-center justify-center p-4">
          <div class="absolute inset-0 bg-slate-950/70 backdrop-blur-sm" @click="activeModalProject = null"></div>
          <div class="relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl text-slate-900 dark:text-white space-y-6">
          
          <!-- Modal Header -->
          <div class="flex items-start justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                <Icon :name="activeModalProject.icon" class="text-2xl" />
              </div>
              <div>
                <span class="text-[10px] font-mono font-bold uppercase text-cyan-600 dark:text-cyan-400">
                  {{ activeModalProject.category }}
                </span>
                <h3 class="text-xl font-bold text-slate-900 dark:text-white">{{ activeModalProject.title }}</h3>
              </div>
            </div>

            <button @click="activeModalProject = null" class="text-slate-400 hover:text-slate-600 dark:hover:text-white">
              <span class="material-symbols-outlined text-xl">close</span>
            </button>
          </div>

          <!-- Description -->
          <div class="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            <div>
              <h4 class="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-1">Project Overview</h4>
              <p>{{ activeModalProject.description }}</p>
            </div>

            <div v-if="activeModalProject.problem_solved" class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 space-y-1">
              <h4 class="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider flex items-center gap-1.5">
                <span class="material-symbols-outlined text-emerald-500 text-sm">check_circle</span>
                <span>Problem Solved</span>
              </h4>
              <p>{{ activeModalProject.problem_solved }}</p>
            </div>

            <div v-if="activeModalProject.role" class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 space-y-1">
              <h4 class="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider flex items-center gap-1.5">
                <span class="material-symbols-outlined text-cyan-500 text-sm">person</span>
                <span>My Role & Contribution</span>
              </h4>
              <p>{{ activeModalProject.role }}</p>
            </div>

            <div v-if="activeModalProject.key_challenges" class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 space-y-1">
              <h4 class="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider flex items-center gap-1.5">
                <span class="material-symbols-outlined text-indigo-500 text-sm">psychology</span>
                <span>Technical Challenges & Solution</span>
              </h4>
              <p>{{ activeModalProject.key_challenges }}</p>
            </div>

            <!-- Tech Stack Tags -->
            <div>
              <h4 class="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-2">Technologies Used</h4>
              <div class="flex flex-wrap gap-2">
                <span v-for="tag in activeModalProject.tags" :key="tag.name"
                      class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200">
                  <Icon :name="tag.icon" class="text-sm" />
                  {{ tag.name }}
                </span>
              </div>
            </div>
          </div>

          <!-- Actions -->
          <div class="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-3">
            <a v-if="activeModalProject.github_url && activeModalProject.github_url !== '#'" :href="activeModalProject.github_url" target="_blank"
               class="btn-secondary text-xs flex-1">
              <Icon name="logos:github-icon" class="text-sm" />
              <span>GitHub Repository</span>
            </a>
            <a v-if="activeModalProject.demo_url && activeModalProject.demo_url !== '#'" :href="activeModalProject.demo_url" target="_blank"
               class="btn-primary text-xs flex-1">
              <span class="material-symbols-outlined text-sm">launch</span>
              <span>Live Application</span>
            </a>
            <button @click="activeModalProject = null" class="btn-secondary text-xs">
              Close
            </button>
          </div>

        </div>
      </div>
    </Transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useScrollAnimate } from '~/composables/useScrollAnimate'
import { useSupabase, type ProjectItem } from '~/composables/useSupabase'

const { sectionRef, isVisible } = useScrollAnimate(0.1)
const { fetchProjects, fallbackProjects } = useSupabase()

const projects = ref<ProjectItem[]>(fallbackProjects)
const dataSource = ref<'supabase' | 'fallback'>('fallback')
const selectedCategory = ref('All')
const searchQuery = ref('')
const activeModalProject = ref<ProjectItem | null>(null)

const categories = ['All', 'Mobile', 'Web', 'Backend', 'Academic Projects']

const resetFilters = () => {
  selectedCategory.value = 'All'
  searchQuery.value = ''
}

const openModal = (project: ProjectItem) => {
  activeModalProject.value = project
}

const filteredProjects = computed(() => {
  return projects.value.filter(p => {
    // Category match
    const categoryMatch = selectedCategory.value === 'All' || 
                          p.category.toLowerCase().includes(selectedCategory.value.toLowerCase())
    
    // Search match
    const q = searchQuery.value.trim().toLowerCase()
    if (!q) return categoryMatch

    const titleMatch = p.title.toLowerCase().includes(q)
    const descMatch = p.description.toLowerCase().includes(q)
    const tagMatch = p.tags?.some(t => t.name.toLowerCase().includes(q))

    return categoryMatch && (titleMatch || descMatch || tagMatch)
  })
})

onMounted(async () => {
  try {
    const res = await fetchProjects()
    if (res.projects && res.projects.length > 0) {
      projects.value = res.projects
      dataSource.value = res.source
    }
  } catch (err) {
    // Graceful fallback to verified fallbackProjects
    projects.value = fallbackProjects
    dataSource.value = 'fallback'
  }
})
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
