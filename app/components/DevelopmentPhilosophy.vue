<template>
  <section id="philosophy" class="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref="sectionRef">
    
    <div class="transition-all duration-700 ease-out"
         :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
      
      <!-- Section Header -->
      <div class="max-w-2xl mb-12 sm:mb-16">
        <span class="text-xs font-mono font-bold tracking-widest uppercase text-cyan-600 dark:text-cyan-400 block mb-2">
          HOW I THINK
        </span>
        <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          Good Software Is More Than Code.
        </h2>
        <p class="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Four engineering principles that guide how I architect systems, design user experiences, and solve technical challenges.
        </p>
      </div>

      <!-- 4 Philosophy Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        
        <div v-for="(item, index) in philosophyItems" :key="item.id"
             class="p-7 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-cyan-500/40 transition-all duration-300 space-y-4 flex flex-col justify-between">
          
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div class="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                <span class="material-symbols-outlined text-2xl">{{ item.icon }}</span>
              </div>
              <span class="text-xs font-mono font-bold text-slate-400">
                0{{ index + 1 }}
              </span>
            </div>

            <h3 class="text-xl font-bold text-slate-900 dark:text-white">
              {{ item.title }}
            </h3>

            <blockquote class="text-sm font-medium text-slate-800 dark:text-slate-200 border-l-2 border-cyan-500 pl-3 leading-relaxed italic">
              "{{ item.quote }}"
            </blockquote>
          </div>

          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-2">
            {{ item.description }}
          </p>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { useScrollAnimate } from '~/composables/useScrollAnimate'
import { philosophyItems } from '~/data/philosophy'

const { sectionRef, isVisible } = useScrollAnimate(0.1)
</script>
