<template>
  <section id="hero" class="relative min-h-[92vh] flex items-center pt-24 pb-20 bg-grid-subtle overflow-hidden" ref="sectionRef">
    
    <!-- Subtle Ambient Gradients -->
    <div class="absolute top-1/4 left-1/3 -translate-x-1/2 w-[650px] h-[380px] bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-transparent blur-3xl rounded-full pointer-events-none"></div>
    <div class="absolute bottom-10 right-10 w-[500px] h-[350px] bg-cyan-400/5 blur-3xl rounded-full pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

        <!-- Left Content (Hero Pitch) -->
        <div class="lg:col-span-6 space-y-6 transition-all duration-700 ease-out"
             :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
          
          <!-- Availability Badge -->
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold tracking-wide">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Opportunities</span>
            <span class="text-slate-300 dark:text-slate-600">•</span>
            <span class="text-slate-500 dark:text-slate-400 font-normal">Phnom Penh, Cambodia</span>
          </div>

          <!-- Main Headline -->
          <div class="space-y-2">
            <p class="text-xs sm:text-sm font-mono font-bold tracking-widest uppercase text-cyan-600 dark:text-cyan-400">
              Flutter Developer & Mobile App Architect
            </p>
            <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.08] text-slate-900 dark:text-white">
              Building Scalable <br class="hidden sm:inline" />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600">
                Mobile Experiences.
              </span>
            </h1>
          </div>

          <!-- Supporting Description -->
          <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
            I'm <strong class="text-slate-900 dark:text-white font-semibold">Nheb Panha</strong>, a Flutter Developer focused on building reliable, intuitive, and maintainable mobile applications with Flutter, Supabase, Firebase, and Clean Architecture.
          </p>

          <!-- Core Capability Highlights -->
          <div class="flex flex-wrap gap-2 pt-1 text-xs">
            <span class="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <Icon name="logos:flutter" class="text-sm" />
              Flutter & Dart
            </span>
            <span class="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <Icon name="logos:supabase-icon" class="text-sm" />
              Supabase & PostgreSQL
            </span>
            <span class="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <Icon name="logos:firebase" class="text-sm" />
              Firebase
            </span>
            <span class="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <span class="material-symbols-outlined text-cyan-500 text-sm">layers</span>
              Clean Architecture & BLoC
            </span>
          </div>

          <!-- CTAs & Action Links -->
          <div class="pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
            <!-- Primary CTA -->
            <a href="#projects" @click="(e) => scrollTo('#projects', e)"
               class="btn-primary">
              <span>View My Projects</span>
              <span class="material-symbols-outlined text-base">arrow_downward</span>
            </a>

            <!-- Secondary CTA -->
            <button @click="triggerResume"
                    class="btn-secondary">
              <span class="material-symbols-outlined text-base">download</span>
              <span>Download Resume</span>
            </button>

            <!-- Contact Link -->
            <a href="#contact" @click="(e) => scrollTo('#contact', e)"
               class="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors px-2 py-1 flex items-center gap-1">
              <span>Contact Me</span>
              <span class="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>

          <!-- Social Proof / Verified Links -->
          <div class="pt-2 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
            <span class="font-medium text-slate-400 dark:text-slate-500">Verified Profiles:</span>
            <a href="https://github.com/panhanheb" target="_blank" rel="noopener noreferrer"
               class="inline-flex items-center gap-1.5 hover:text-cyan-500 transition-colors">
              <Icon name="logos:github-icon" class="text-sm" />
              <span>GitHub</span>
            </a>
            <span class="opacity-30">•</span>
            <a href="https://linkedin.com/in/nhebpanha" target="_blank" rel="noopener noreferrer"
               class="inline-flex items-center gap-1.5 hover:text-cyan-500 transition-colors">
              <Icon name="logos:linkedin-icon" class="text-sm" />
              <span>LinkedIn</span>
            </a>
            <span class="opacity-30">•</span>
            <span class="inline-flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span>Middle-Level Developer</span>
            </span>
          </div>

        </div>

        <!-- Right: Circular Developer Profile Showcase (Circle Format) -->
        <div class="lg:col-span-6 relative flex flex-col items-center justify-center transition-all duration-700 ease-out delay-200"
             :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
          
          <div class="relative flex flex-col items-center max-w-md w-full">
            
            <!-- Circular Avatar & Orbiting Pills Wrapper -->
            <div class="relative flex items-center justify-center my-2">
              
              <!-- Ambient Glow Behind Circle -->
              <div class="absolute inset-0 w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 -m-4 bg-gradient-to-tr from-cyan-500/25 via-sky-500/20 to-indigo-600/25 rounded-full blur-3xl opacity-75 pointer-events-none"></div>

              <!-- Decorative Subtle Orbit Dashed Ring -->
              <div class="absolute -inset-4 sm:-inset-6 rounded-full border border-dashed border-cyan-500/30 dark:border-cyan-400/30 pointer-events-none"></div>

              <!-- Orbiting Pill 1: Top Right (Flutter 3.x) -->
              <div class="absolute -top-3 right-1 sm:right-3 z-20 px-3.5 py-1.5 rounded-full bg-slate-900/95 text-white border border-cyan-400/40 shadow-xl backdrop-blur-md text-xs font-bold flex items-center gap-1.5 hover:scale-105 transition-transform">
                <Icon name="logos:flutter" class="text-sm" />
                <span>Flutter 3.x</span>
              </div>

              <!-- Orbiting Pill 2: Top Left (Dart Specialist) -->
              <div class="absolute top-5 -left-4 sm:-left-8 z-20 px-3.5 py-1.5 rounded-full bg-slate-900/95 text-white border border-slate-700 shadow-xl backdrop-blur-md text-xs font-semibold flex items-center gap-1.5 hover:scale-105 transition-transform">
                <Icon name="logos:dart" class="text-sm" />
                <span>Dart Specialist</span>
              </div>

              <!-- Orbiting Pill 3: Bottom Left (Clean Architecture) -->
              <div class="absolute bottom-6 -left-4 sm:-left-8 z-20 px-3 py-1.5 rounded-full bg-slate-900/95 text-white border border-slate-700 shadow-xl backdrop-blur-md text-[11px] font-semibold flex items-center gap-1.5 hover:scale-105 transition-transform">
                <span class="material-symbols-outlined text-cyan-400 text-xs">layers</span>
                <span>Clean Architecture</span>
              </div>

              <!-- Orbiting Pill 4: Bottom Right (Supabase DB) -->
              <div class="absolute bottom-6 -right-4 sm:-right-8 z-20 px-3 py-1.5 rounded-full bg-slate-900/95 text-white border border-slate-700 shadow-xl backdrop-blur-md text-[11px] font-semibold flex items-center gap-1.5 hover:scale-105 transition-transform">
                <Icon name="logos:supabase-icon" class="text-xs" />
                <span>Supabase DB</span>
              </div>

              <!-- Main Circle Avatar Container -->
              <div class="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[320px] md:h-[320px] rounded-full p-2 bg-gradient-to-tr from-cyan-400 via-sky-500 to-indigo-600 shadow-[0_0_50px_rgba(6,182,212,0.35)] transition-transform duration-500 hover:scale-[1.02] group">
                
                <!-- Inner Circle with Photo -->
                <div class="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-950 bg-slate-950 relative shadow-inner">
                  <img :src="currentPhoto" alt="Nheb Panha — Flutter Developer"
                       class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                  
                  <!-- Bottom Dark Fade on Circle -->
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60"></div>
                  
                  <!-- Ready for Hire Pill inside circle bottom -->
                  <div class="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-emerald-400/40 text-emerald-400 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg whitespace-nowrap">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Available for Hire</span>
                  </div>
                </div>

              </div>

            </div>

            <!-- Photo Switcher Pill Below Circle -->
            <div class="mt-4 flex items-center gap-2">
              <button @click="togglePhoto"
                      class="px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1.5 shadow-sm"
                      title="Switch between studio photo and field photo">
                <span class="material-symbols-outlined text-sm">switch_camera</span>
                <span>Switch to {{ photoMode === 'studio' ? 'Field Photo' : 'Studio Photo' }}</span>
              </button>
            </div>

            <!-- Profile Info Card Below Circle -->
            <div class="mt-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg text-center space-y-2 w-full max-w-sm">
              <div class="flex items-center justify-center gap-1.5">
                <h3 class="text-lg font-bold text-slate-900 dark:text-white">Nheb Panha</h3>
                <span class="material-symbols-outlined text-cyan-500 text-base" title="Verified Profile">verified</span>
              </div>
              
              <p class="text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                Flutter Developer & Mobile App Architect
              </p>

              <p class="text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1">
                <span class="material-symbols-outlined text-xs">location_on</span>
                <span>Phnom Penh, Cambodia (UTC+7)</span>
              </p>

              <div class="pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-center gap-3">
                <a href="https://github.com/panhanheb" target="_blank" rel="noopener noreferrer"
                   class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-cyan-500 transition-colors"
                   title="GitHub">
                  <Icon name="logos:github-icon" class="text-sm" />
                </a>
                <a href="https://linkedin.com/in/nhebpanha" target="_blank" rel="noopener noreferrer"
                   class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-cyan-500 transition-colors"
                   title="LinkedIn">
                  <Icon name="logos:linkedin-icon" class="text-sm" />
                </a>
                <a href="mailto:samlot.development@gmail.com"
                   class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-cyan-500 transition-colors"
                   title="Email">
                  <span class="material-symbols-outlined text-sm">mail</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useScrollAnimate } from '~/composables/useScrollAnimate'

const { sectionRef, isVisible } = useScrollAnimate(0.1)

const photoMode = ref<'studio' | 'field'>('studio')

const currentPhoto = computed(() => {
  return photoMode.value === 'studio' ? '/image/panha_part.png' : '/image/panha_profile.png'
})

const togglePhoto = () => {
  photoMode.value = photoMode.value === 'studio' ? 'field' : 'studio'
}

const scrollTo = (href: string, e: MouseEvent) => {
  e.preventDefault()
  const target = document.querySelector(href) as HTMLElement | null
  if (target) {
    const yOffset = -80
    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

const showResumeModal = useState('resumeModal', () => false)

const triggerResume = () => {
  fetch('/resume.pdf', { method: 'HEAD' })
    .then(res => {
      if (res.ok) {
        const link = document.createElement('a')
        link.href = '/resume.pdf'
        link.setAttribute('download', 'Nheb_Panha_Resume.pdf')
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } else {
        showResumeModal.value = true
      }
    })
    .catch(() => {
      showResumeModal.value = true
    })
}
</script>