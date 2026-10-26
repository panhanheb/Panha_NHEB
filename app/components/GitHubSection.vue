<template>
  <section id="github" class="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref="sectionRef">
    
    <div class="transition-all duration-700 ease-out"
         :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div class="max-w-2xl">
          <span class="text-xs font-mono font-bold tracking-widest uppercase text-cyan-600 dark:text-cyan-400 block mb-2">
            OPEN SOURCE & CODE
          </span>
          <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Explore My Work on GitHub.
          </h2>
        </div>

        <div class="flex items-center gap-3">
          <a href="https://github.com/panhanheb" target="_blank" rel="noopener noreferrer"
             class="btn-secondary text-xs">
            <Icon name="logos:github-icon" class="text-base" />
            <span>@panhanheb Profile</span>
            <span class="material-symbols-outlined text-sm">open_in_new</span>
          </a>
        </div>
      </div>

      <!-- Repositories Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <a v-for="repo in githubRepositories" :key="repo.name"
           :href="repo.url" target="_blank" rel="noopener noreferrer"
           class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group">
          
          <div class="space-y-3">
            <div class="flex items-center justify-between gap-2">
              <div class="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm group-hover:text-cyan-500 transition-colors">
                <span class="material-symbols-outlined text-cyan-500 text-lg">code_blocks</span>
                <span class="truncate">{{ repo.name }}</span>
              </div>
              <span class="material-symbols-outlined text-slate-400 text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                arrow_outward
              </span>
            </div>

            <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
              {{ repo.description }}
            </p>

            <!-- Topics -->
            <div class="flex flex-wrap gap-1.5 pt-1">
              <span v-for="topic in repo.topics.slice(0, 3)" :key="topic"
                    class="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                #{{ topic }}
              </span>
            </div>
          </div>

          <!-- Repo Metadata Footer -->
          <div class="pt-4 border-t border-slate-100 dark:border-slate-800/80 mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <div class="flex items-center gap-1.5">
              <span class="w-2.5 h-2.5 rounded-full" :style="{ backgroundColor: repo.languageColor }"></span>
              <span class="text-slate-700 dark:text-slate-300 font-medium">{{ repo.language }}</span>
            </div>

            <div class="flex items-center gap-3">
              <span class="flex items-center gap-1" title="Stars">
                <span class="material-symbols-outlined text-amber-500 text-xs">star</span>
                <span class="font-mono">{{ repo.stars }}</span>
              </span>
              <span class="flex items-center gap-1" title="Forks">
                <span class="material-symbols-outlined text-slate-400 text-xs">call_split</span>
                <span class="font-mono">{{ repo.forks }}</span>
              </span>
            </div>
          </div>

        </a>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { useScrollAnimate } from '~/composables/useScrollAnimate'
import { githubRepositories } from '~/data/github'

const { sectionRef, isVisible } = useScrollAnimate(0.1)
</script>
