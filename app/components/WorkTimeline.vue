<template>
  <section id="experience" class="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref="sectionRef">
    <div id="timeline" class="absolute -top-20"></div>

    <div class="transition-all duration-700 ease-out"
         :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
      
      <!-- Section Header -->
      <div class="max-w-2xl mb-12 sm:mb-16">
        <span class="text-xs font-mono font-bold tracking-widest uppercase text-cyan-600 dark:text-cyan-400 block mb-2">
          MY JOURNEY
        </span>
        <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          Learning, Building, and Growing.
        </h2>
        <p class="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          A chronological journey spanning production mobile engineering, technology instruction, and academic computer science studies in Cambodia.
        </p>
      </div>

      <!-- Experience & Education Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <!-- Left: Professional & Instructional Experience -->
        <div class="lg:col-span-7 space-y-6">
          <div class="flex items-center gap-2 mb-2">
            <span class="material-symbols-outlined text-cyan-500 text-lg">work</span>
            <h3 class="text-sm font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Professional & Instructional Experience
            </h3>
          </div>

          <div class="relative pl-6 sm:pl-8 border-l border-slate-200 dark:border-slate-800 space-y-8">
            <div v-for="item in professionalExperience" :key="item.id" class="relative group">
              <!-- Bullet Node -->
              <div class="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-cyan-500 group-hover:scale-125 transition-transform duration-200 shadow-sm"></div>

              <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 hover:border-cyan-500/40 transition-all">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <h4 class="text-base font-bold text-slate-900 dark:text-white">
                      {{ item.role }}
                    </h4>
                    <p class="text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                      {{ item.company }} • <span class="font-normal text-slate-500 dark:text-slate-400">{{ item.location }}</span>
                    </p>
                  </div>
                  <span class="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 w-fit">
                    {{ item.period }}
                  </span>
                </div>

                <ul class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-2">
                  <li v-for="(task, i) in item.focus" :key="i" class="flex items-start gap-2">
                    <span class="text-cyan-500 mt-1 shrink-0 text-xs">•</span>
                    <span>{{ task }}</span>
                  </li>
                </ul>

                <div class="flex flex-wrap gap-1.5 pt-2">
                  <span v-for="tech in item.technologies" :key="tech"
                        class="px-2.5 py-1 rounded-md bg-slate-50 dark:bg-slate-800 text-[11px] font-medium text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Education Journey -->
        <div class="lg:col-span-5 space-y-6">
          <div class="flex items-center gap-2 mb-2">
            <span class="material-symbols-outlined text-indigo-500 text-lg">school</span>
            <h3 class="text-sm font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Education & Academic Foundation
            </h3>
          </div>

          <div class="space-y-4">
            <div v-for="edu in educationHistory" :key="edu.id"
                 class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
              <div class="flex items-center justify-between gap-2">
                <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  {{ edu.period }}
                </span>
                <span class="px-2 py-0.5 rounded-full text-[10px] font-semibold border"
                      :class="edu.status === 'In Progress' 
                        ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-600 dark:text-cyan-400' 
                        : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'">
                  {{ edu.status }}
                </span>
              </div>

              <h4 class="text-sm font-bold text-slate-900 dark:text-white">
                {{ edu.institution }}
              </h4>
              <p class="text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                {{ edu.degree }}
              </p>
              <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                {{ edu.details }}
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { useScrollAnimate } from '~/composables/useScrollAnimate'
import { professionalExperience, educationHistory } from '~/data/experience'

const { sectionRef, isVisible } = useScrollAnimate(0.1)
</script>
