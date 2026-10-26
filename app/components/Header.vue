<template>
  <header class="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      
      <!-- Brand / Monogram Logo -->
      <a href="#hero" @click="(e) => scrollToSection(e, '#hero')" class="flex items-center gap-3 group">
        <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1px] shadow-sm group-hover:scale-105 transition-transform">
          <div class="w-full h-full bg-slate-900 rounded-[11px] flex items-center justify-center font-black text-cyan-400 text-xs tracking-wider">
            NP
          </div>
        </div>
        <div class="flex flex-col">
          <span class="text-sm font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
            Nheb Panha
            <span class="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
          </span>
          <span class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Flutter Developer</span>
        </div>
      </a>

      <!-- Desktop Nav Links -->
      <nav class="hidden lg:flex items-center gap-1 p-1 rounded-full bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 backdrop-blur-md">
        <a v-for="link in navLinks" :key="link.name" :href="link.href" @click="(e) => scrollToSection(e, link.href)"
           :class="[
             'text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all duration-200',
             link.active
               ? 'bg-white dark:bg-slate-700 text-cyan-600 dark:text-cyan-400 shadow-sm'
               : 'text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-white/60 dark:hover:bg-slate-700/40'
           ]">
          {{ link.name }}
        </a>
      </nav>

      <!-- Right Actions: Theme Toggle, Resume & Supabase Sync -->
      <div class="flex items-center gap-2.5">
        
        <!-- Supabase Status Badge -->
        <div class="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide border"
             :class="isConfigured ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400' : 'bg-cyan-500/10 border-cyan-500/20 text-cyan-600 dark:text-cyan-400'">
          <span class="w-1.5 h-1.5 rounded-full" :class="isConfigured ? 'bg-emerald-500 animate-pulse' : 'bg-cyan-400'"></span>
          <span class="hidden md:inline">{{ isConfigured ? 'Cloud Sync' : 'Live Mode' }}</span>
        </div>

        <!-- Dark / Light Theme Toggle -->
        <button @click="toggleDark" 
                class="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-500 transition-colors shadow-sm"
                aria-label="Toggle Theme">
          <span class="material-symbols-outlined text-lg">
            {{ isDark ? 'light_mode' : 'dark_mode' }}
          </span>
        </button>

        <!-- Resume Download CTA Button -->
        <button @click="handleResumeClick"
                class="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-sm hover:opacity-95 hover:shadow-cyan-500/20 active:scale-95 transition-all">
          <span class="material-symbols-outlined text-sm">description</span>
          <span>Resume</span>
        </button>

        <!-- Mobile Menu Toggle -->
        <button @click="toggleMenu" 
                class="lg:hidden w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 flex items-center justify-center hover:border-cyan-400 transition-colors"
                aria-label="Toggle navigation menu">
          <span class="material-symbols-outlined text-xl">
            {{ isMenuOpen ? 'close' : 'menu' }}
          </span>
        </button>
      </div>

    </div>

    <!-- Mobile Drawer -->
    <Transition name="drawer">
      <div v-show="isMenuOpen" 
           class="lg:hidden bg-white/95 dark:bg-slate-900/95 border-b border-slate-200 dark:border-slate-800 px-6 py-6 space-y-3 backdrop-blur-2xl shadow-xl">
        <div class="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
          <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Navigation</span>
          <span class="text-[10px] text-cyan-500 font-mono">Nheb Panha Portfolio</span>
        </div>

        <div class="grid grid-cols-2 gap-2">
          <a v-for="link in navLinks" :key="link.name" :href="link.href" @click="(e) => scrollToSection(e, link.href)"
             :class="[
               'px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-between',
               link.active
                 ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 font-bold'
                 : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
             ]">
            <span>{{ link.name }}</span>
            <span class="material-symbols-outlined text-xs opacity-50">arrow_forward</span>
          </a>
        </div>

        <div class="pt-3 flex gap-2">
          <button @click="handleResumeClick"
                  class="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-md">
            <span class="material-symbols-outlined text-sm">download</span>
            <span>Download Resume</span>
          </button>
          
          <a href="#contact" @click="(e) => scrollToSection(e, '#contact')"
             class="py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold text-center flex items-center justify-center gap-1.5">
            <span class="material-symbols-outlined text-sm">mail</span>
            <span>Contact</span>
          </a>
        </div>
      </div>
    </Transition>

    <!-- Resume Fallback Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="showResumeModal" class="fixed inset-0 z-[999] flex items-center justify-center p-4">
          <div class="absolute inset-0 bg-slate-950/70 backdrop-blur-sm" @click="showResumeModal = false"></div>
          <div class="relative z-10 w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl text-slate-900 dark:text-white">
            <div class="flex items-center justify-between mb-5 pb-3 border-b border-slate-200 dark:border-slate-800">
              <div class="flex items-center gap-2.5">
                <div class="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-500 flex items-center justify-center">
                  <span class="material-symbols-outlined text-lg">badge</span>
                </div>
                <h3 class="text-base font-bold">Resume Profile — Nheb Panha</h3>
              </div>
              <button @click="showResumeModal = false" class="text-slate-400 hover:text-slate-600 dark:hover:text-white">
                <span class="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            <div class="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-1.5">
                <p class="font-bold text-slate-900 dark:text-white text-sm">Nheb Panha</p>
                <p class="text-cyan-600 dark:text-cyan-400 font-semibold text-xs">Flutter Developer | Mobile App Architect</p>
                <p class="text-slate-500 dark:text-slate-400 text-xs">Phnom Penh, Cambodia (UTC+7)</p>
              </div>

              <p class="leading-relaxed">
                Middle-Level Developer specializing in cross-platform mobile architecture with Flutter, Dart, BLoC/Cubit, Supabase, Firebase, and Clean Architecture.
              </p>

              <div class="space-y-2">
                <div class="flex items-center justify-between text-xs py-1 border-b border-slate-100 dark:border-slate-800">
                  <span class="font-medium text-slate-500 dark:text-slate-400">Email:</span>
                  <span class="font-mono text-cyan-600 dark:text-cyan-400">samlot.development@gmail.com</span>
                </div>
                <div class="flex items-center justify-between text-xs py-1 border-b border-slate-100 dark:border-slate-800">
                  <span class="font-medium text-slate-500 dark:text-slate-400">GitHub:</span>
                  <a href="https://github.com/panhanheb" target="_blank" class="text-cyan-600 dark:text-cyan-400 hover:underline">github.com/panhanheb</a>
                </div>
                <div class="flex items-center justify-between text-xs py-1">
                  <span class="font-medium text-slate-500 dark:text-slate-400">LinkedIn:</span>
                  <a href="https://linkedin.com/in/nhebpanha" target="_blank" class="text-cyan-600 dark:text-cyan-400 hover:underline">linkedin.com/in/nhebpanha</a>
                </div>
              </div>
            </div>

            <div class="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex gap-3">
              <a href="mailto:samlot.development@gmail.com?subject=Resume%20Inquiry%20-%20Nheb%20Panha"
                 class="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-sm">
                <span class="material-symbols-outlined text-sm">mail</span>
                <span>Request Full PDF</span>
              </a>
              <button @click="showResumeModal = false"
                      class="py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">
                Close
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const { isConfigured } = useSupabase()

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const showResumeModal = useState('resumeModal', () => false)
const handleResumeClick = () => {
  isMenuOpen.value = false
  // Check if a direct resume file exists or open modal
  const link = document.createElement('a')
  link.href = '/resume.pdf'
  link.setAttribute('download', 'Nheb_Panha_Resume.pdf')
  document.body.appendChild(link)
  
  // Try fetching to see if resume.pdf exists
  fetch('/resume.pdf', { method: 'HEAD' })
    .then(res => {
      if (res.ok) {
        link.click()
      } else {
        showResumeModal.value = true
      }
    })
    .catch(() => {
      showResumeModal.value = true
    })
    .finally(() => {
      document.body.removeChild(link)
    })
}

const navLinks = ref([
  { name: 'Home', href: '#hero', active: true },
  { name: 'About', href: '#about', active: false },
  { name: 'Skills', href: '#skills', active: false },
  { name: 'Architecture', href: '#architecture', active: false },
  { name: 'Experience', href: '#experience', active: false },
  { name: 'Projects', href: '#projects', active: false },
  { name: 'Contact', href: '#contact', active: false }
])

const scrollToSection = (e: MouseEvent, href: string) => {
  e.preventDefault()
  isMenuOpen.value = false

  if (!href || href === '#') return

  const target = document.querySelector(href) as HTMLElement | null
  if (target) {
    const yOffset = -80
    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

const handleScroll = () => {
  const scrollPosition = window.scrollY + 140

  const sections = navLinks.value
    .map(link => {
      const el = document.querySelector(link.href) as HTMLElement | null
      return { href: link.href, offsetTop: el ? el.offsetTop : -1 }
    })
    .filter(item => item.offsetTop !== -1)
    .sort((a, b) => a.offsetTop - b.offsetTop)

  let currentSection = navLinks.value[0].href

  for (const section of sections) {
    if (section.offsetTop <= scrollPosition) {
      currentSection = section.href
    }
  }

  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
    if (sections.length > 0) {
      currentSection = sections[sections.length - 1].href
    }
  }

  navLinks.value.forEach(link => {
    link.active = link.href === currentSection
  })
}

const isDark = ref(true) // default to refined dark mode as requested
const toggleDark = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
  } else {
    // Default to dark theme per requirement 4
    isDark.value = true
  }

  document.documentElement.classList.toggle('dark', isDark.value)
  window.addEventListener('scroll', handleScroll, { passive: true })
  setTimeout(handleScroll, 100)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.drawer-enter-active,
.drawer-leave-active,
.modal-enter-active,
.modal-leave-active {
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.drawer-enter-from,
.drawer-leave-to,
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>