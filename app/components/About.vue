<template>
  <section id="about" class="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref="sectionRef">
    
    <div class="transition-all duration-700 ease-out"
         :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
      
      <!-- Section Header -->
      <div class="max-w-2xl mb-12 sm:mb-16">
        <span class="text-xs font-mono font-bold tracking-widest uppercase text-cyan-600 dark:text-cyan-400 block mb-2">
          About Me
        </span>
        <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          Engineering Intuitive, Architecture-Driven Applications.
        </h2>
        <p class="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          A dedicated Middle-Level Flutter Developer based in Phnom Penh, focused on writing clean, scalable, and maintainable software across mobile and modern web environments.
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
                  <span class="font-semibold text-slate-700 dark:text-slate-300">Supabase & REST</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Fact Card -->
          <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 text-xs space-y-2">
            <div class="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
              <span class="material-symbols-outlined text-cyan-500 text-sm">verified_user</span>
              <span>Practical Background</span>
            </div>
            <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
              Combining a systematic accounting-oriented mindset with software engineering—ensuring clean data modeling, robust ledger calculations, and disciplined application structure.
            </p>
          </div>
        </div>

        <!-- Right: Authentic Narrative & Core Pillars -->
        <div class="lg:col-span-7 space-y-6">
          
          <div class="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h3 class="text-xl font-bold text-slate-900 dark:text-white">
              My Development Philosophy
            </h3>
            
            <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              I specialize in cross-platform mobile application development with <strong>Flutter and Dart</strong>. My primary emphasis is on creating reliable, production-oriented solutions where clean architecture and predictable state management come first.
            </p>

            <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Throughout my work on mobile courier systems like <em>Red Ant Express</em>, e-commerce discovery applications, and financial ledger suites, I have developed a strong discipline for modular architecture. I ensure that presentation code is decoupled from domain logic and remote data sources, making applications straightforward to test, maintain, and scale over time.
            </p>

            <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              On the backend and web side, I integrate <strong>Supabase</strong> (PostgreSQL with Row Level Security), <strong>Firebase</strong>, <strong>Vue 3</strong>, and <strong>Nuxt 4</strong> to create end-to-end synchronized ecosystems.
            </p>
          </div>

          <!-- 4 Pillars Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
              <div class="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                <span class="material-symbols-outlined text-lg">architecture</span>
              </div>
              <h4 class="font-bold text-sm text-slate-900 dark:text-white">Clean Architecture</h4>
              <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Strict layer decoupling (Presentation, Domain, and Data) ensures code is modular and testable.
              </p>
            </div>

            <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
              <div class="w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <span class="material-symbols-outlined text-lg">settings_suggest</span>
              </div>
              <h4 class="font-bold text-sm text-slate-900 dark:text-white">Predictable State</h4>
              <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Employing BLoC, Cubit, and reactive streams to handle complex UI state without side effects.
              </p>
            </div>

            <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
              <div class="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <span class="material-symbols-outlined text-lg">database</span>
              </div>
              <h4 class="font-bold text-sm text-slate-900 dark:text-white">Database & APIs</h4>
              <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Integrating PostgreSQL via Supabase, Firebase auth, RESTful APIs, and local offline caches.
              </p>
            </div>

            <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
              <div class="w-8 h-8 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                <span class="material-symbols-outlined text-lg">devices</span>
              </div>
              <h4 class="font-bold text-sm text-slate-900 dark:text-white">UI/UX Precision</h4>
              <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Crafting pixel-perfect, responsive layouts with smooth micro-interactions on mobile and web.
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

const { sectionRef, isVisible } = useScrollAnimate(0.1)
</script>