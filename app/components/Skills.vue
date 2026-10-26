<template>
  <section id="skills" class="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref="sectionRef">
    
    <div class="transition-all duration-700 ease-out"
         :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
      
      <!-- Section Header -->
      <div class="max-w-2xl mb-12 sm:mb-16">
        <span class="text-xs font-mono font-bold tracking-widest uppercase text-cyan-600 dark:text-cyan-400 block mb-2">
          TECH STACK
        </span>
        <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          Tools I Use to Build Better Software.
        </h2>
        <p class="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Technologies and tools organized by engineering domain, applied directly to production mobile systems, cloud backends, and maintainable software architectures.
        </p>
      </div>

      <!-- Categories Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div v-for="cat in skillCategories" :key="cat.title"
             class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 hover:border-cyan-500/40 transition-all flex flex-col justify-between">
          
          <div class="space-y-2">
            <h3 class="font-bold text-base text-slate-900 dark:text-white">
              {{ cat.title }}
            </h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              {{ cat.description }}
            </p>
          </div>

          <!-- Skills Chips -->
          <div class="flex flex-wrap gap-2 pt-2">
            <div v-for="skill in cat.skills" :key="skill.name"
                 class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs font-medium text-slate-800 dark:text-slate-200 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-colors cursor-default"
                 :title="skill.description">
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
import { skillCategories } from '~/data/skills'

const { sectionRef, isVisible } = useScrollAnimate(0.1)
</script>