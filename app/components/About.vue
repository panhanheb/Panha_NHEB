<template>
  <section id="about" class="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref="sectionRef">
    
    <div class="transition-all duration-700 ease-out"
         :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
      
      <!-- Section Header -->
      <div class="max-w-2xl mb-12 sm:mb-16">
        <span class="text-xs font-mono font-bold tracking-widest uppercase text-cyan-600 dark:text-cyan-400 block mb-2">
          ABOUT ME
        </span>
        <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          Turning Ideas Into Thoughtful Digital Experiences.
        </h2>
        <p class="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          A Middle-Level Flutter Developer based in Phnom Penh, Cambodia, dedicated to building reliable cross-platform applications, scalable software architectures, and intuitive digital interfaces.
        </p>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        <!-- Left: Image & Personal Card -->
        <div class="lg:col-span-5 space-y-6">
          <div class="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg group">
            <div class="aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800">
              <img src="/image/panha_profile.png" alt="Nheb Panha" 
                   class="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-500" />
            </div>

            <div class="p-5 space-y-3">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="font-bold text-base text-slate-900 dark:text-white">Nheb Panha</h3>
                  <p class="text-xs text-cyan-600 dark:text-cyan-400 font-medium">Flutter Developer | Mobile App Architect</p>
                </div>
                <span class="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[11px] font-mono font-semibold text-slate-700 dark:text-slate-300">
                  Phnom Penh
                </span>
              </div>

              <div class="pt-3 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span class="text-slate-400 text-[10px] block uppercase font-medium">Focus</span>
                  <span class="font-semibold text-slate-700 dark:text-slate-300">Flutter Mobile</span>
                </div>
                <div>
                  <span class="text-slate-400 text-[10px] block uppercase font-medium">Backend</span>
                  <span class="font-semibold text-slate-700 dark:text-slate-300">Supabase & Firebase</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Link to Full About Page -->
          <NuxtLink to="/about"
                    class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-between text-xs font-semibold text-slate-800 dark:text-slate-200 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all group">
            <span class="flex items-center gap-2">
              <span class="material-symbols-outlined text-cyan-500 text-base">badge</span>
              <span>Read Full Professional Story & Approach</span>
            </span>
            <span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </NuxtLink>
        </div>

        <!-- Right: Authentic Narrative & What I Care About -->
        <div class="lg:col-span-7 space-y-6">
          
          <div class="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h3 class="text-xl font-bold text-slate-900 dark:text-white">
              Engineering with Architecture & Discipline
            </h3>
            
            <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              I specialize in cross-platform mobile application development with <strong>Flutter and Dart</strong>. My primary emphasis is on creating dependable, production-oriented solutions where clean software architecture and predictable state management come first.
            </p>

            <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Throughout my work on mobile courier systems like <em>Red Ant Express</em>, e-commerce discovery applications, and financial ledger suites, I have developed a strong discipline for modular architecture. I ensure that presentation code is decoupled from domain logic and remote data sources, making applications straightforward to test, maintain, and scale over time.
            </p>

            <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              On the backend and web side, I integrate <strong>Supabase</strong> (PostgreSQL with Row Level Security), <strong>Firebase</strong>, <strong>REST APIs</strong>, and <strong>Vue 3 / Nuxt 4</strong> to create end-to-end synchronized ecosystems.
            </p>
          </div>

          <!-- What I Care About Header & 4 Cards -->
          <div class="space-y-3">
            <span class="text-xs font-mono font-bold tracking-wider uppercase text-slate-400 block">
              What I Care About
            </span>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                <div class="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                  <span class="material-symbols-outlined text-lg">verified</span>
                </div>
                <h4 class="font-bold text-sm text-slate-900 dark:text-white">Code Quality</h4>
                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Writing readable, self-documenting code with strict typing, clear abstractions, and automated testability.
                </p>
              </div>

              <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                <div class="w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <span class="material-symbols-outlined text-lg">touch_app</span>
                </div>
                <h4 class="font-bold text-sm text-slate-900 dark:text-white">User Experience</h4>
                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Crafting fluid 60fps micro-interactions, responsive layouts, intuitive navigation, and thoughtful error states.
                </p>
              </div>

              <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                <div class="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <span class="material-symbols-outlined text-lg">layers</span>
                </div>
                <h4 class="font-bold text-sm text-slate-900 dark:text-white">Scalable Architecture</h4>
                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Separating concerns across Presentation, Domain, and Data layers to ensure codebases scale without regression.
                </p>
              </div>

              <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                <div class="w-8 h-8 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                  <span class="material-symbols-outlined text-lg">school</span>
                </div>
                <h4 class="font-bold text-sm text-slate-900 dark:text-white">Continuous Learning</h4>
                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Actively exploring modern design systems, cloud backend evolutions, and emerging mobile engineering standards.
                </p>
              </div>

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
</script>