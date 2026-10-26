<template>
  <header class="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      
      <!-- Brand / Monogram Logo -->
      <NuxtLink to="/" class="flex items-center gap-3 group">
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
      </NuxtLink>

      <!-- Desktop Nav Links -->
      <nav class="hidden lg:flex items-center gap-1 p-1 rounded-full bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 backdrop-blur-md">
        <button v-for="link in navLinks" :key="link.name" @click="(e) => navigateToLink(e, link)"
                :class="[
                  'text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all duration-200',
                  isLinkActive(link)
                    ? 'bg-white dark:bg-slate-700 text-cyan-600 dark:text-cyan-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-white/60 dark:hover:bg-slate-700/40'
                ]">
          {{ link.name }}
        </button>
      </nav>

      <!-- Right Actions: Theme Toggle, Let's Talk & CV -->
      <div class="flex items-center gap-2 sm:gap-2.5">
        
        <!-- Dark / Light Theme Toggle -->
        <button @click="toggleDark" 
                class="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-500 transition-colors shadow-sm"
                aria-label="Toggle Theme">
          <span class="material-symbols-outlined text-lg">
            {{ isDark ? 'light_mode' : 'dark_mode' }}
          </span>
        </button>

        <!-- CV Button -->
        <button @click="handleResumeClick"
                class="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:border-cyan-400 hover:text-cyan-500 transition-colors">
          <span class="material-symbols-outlined text-sm">download</span>
          <span>CV</span>
        </button>

        <!-- Prominent "Let's Talk" Button -->
        <NuxtLink to="/contact"
                  class="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-sm hover:opacity-95 hover:shadow-cyan-500/20 active:scale-95 transition-all">
          <span class="material-symbols-outlined text-sm">chat</span>
          <span>Let's Talk</span>
        </NuxtLink>

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
           class="lg:hidden bg-white/95 dark:bg-slate-900/95 border-b border-slate-200 dark:border-slate-800 px-6 py-6 space-y-4 backdrop-blur-2xl shadow-xl">
        <div class="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
          <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Navigation</span>
          <span class="text-[10px] text-cyan-500 font-mono">Nheb Panha Portfolio</span>
        </div>

        <div class="grid grid-cols-2 gap-2">
          <button v-for="link in navLinks" :key="link.name" @click="(e) => navigateToLink(e, link)"
                  :class="[
                    'px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-between text-left',
                    isLinkActive(link)
                      ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 font-bold'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  ]">
            <span>{{ link.name }}</span>
            <span class="material-symbols-outlined text-xs opacity-50">arrow_forward</span>
          </button>
        </div>

        <div class="pt-2 flex gap-2">
          <NuxtLink to="/contact" @click="isMenuOpen = false"
                    class="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-md">
            <span class="material-symbols-outlined text-sm">chat</span>
            <span>Let's Talk</span>
          </NuxtLink>

          <button @click="handleResumeClick"
                  class="py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold text-center flex items-center justify-center gap-1.5">
            <span class="material-symbols-outlined text-sm">download</span>
            <span>CV</span>
          </button>
        </div>
      </div>
    </Transition>

    <!-- Resume Fallback Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="showResumeModal" class="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <div class="absolute inset-0 bg-slate-950/70 backdrop-blur-sm" @click="showResumeModal = false"></div>
          <div class="relative z-10 w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-900 dark:text-white">
            <div class="flex items-center justify-between mb-5 pb-3 border-b border-slate-200 dark:border-slate-800">
              <div class="flex items-center gap-2.5">
                <div class="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-500 flex items-center justify-center">
                  <span class="material-symbols-outlined text-lg">badge</span>
                </div>
                <div>
                  <h3 class="font-bold text-sm">Curriculum Vitae</h3>
                  <p class="text-[11px] text-slate-500 dark:text-slate-400">Nheb Panha — Flutter Developer</p>
                </div>
              </div>
              <button @click="showResumeModal = false" class="text-slate-400 hover:text-slate-600 dark:hover:text-white">
                <span class="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            <div class="space-y-4 text-xs text-slate-600 dark:text-slate-300">
              <p>
                You can download the verified PDF resume directly, or connect via LinkedIn and Telegram:
              </p>
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 space-y-2">
                <div class="flex justify-between">
                  <span class="text-slate-400">Role:</span>
                  <span class="font-semibold text-slate-800 dark:text-white">Flutter Developer | Mobile App Architect</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-400">Location:</span>
                  <span class="font-semibold text-slate-800 dark:text-white">Phnom Penh, Cambodia</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-400">Telegram:</span>
                  <a href="https://t.me/panhanheb" target="_blank" class="text-sky-500 font-semibold hover:underline">@panhanheb</a>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-400">Email:</span>
                  <a href="mailto:samlot.development@gmail.com" class="text-cyan-500 font-semibold hover:underline">samlot.development@gmail.com</a>
                </div>
              </div>
            </div>

            <div class="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex gap-3">
              <a href="mailto:samlot.development@gmail.com?subject=Resume%20Inquiry%20-%20Nheb%20Panha"
                 class="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-sm">
                <span class="material-symbols-outlined text-sm">mail</span>
                <span>Email Panha</span>
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

const route = useRoute()
const router = useRouter()

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const showResumeModal = useState('resumeModal', () => false)
const handleResumeClick = () => {
  isMenuOpen.value = false
  const link = document.createElement('a')
  link.href = '/resume.pdf'
  link.setAttribute('download', 'Nheb_Panha_Resume.pdf')
  document.body.appendChild(link)
  
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
  { name: 'Home', href: '/#hero', path: '/' },
  { name: 'About', href: '/about', path: '/about' },
  { name: 'Skills', href: '/#skills', path: '/' },
  { name: 'Architecture', href: '/#architecture', path: '/' },
  { name: 'Projects', href: '/projects', path: '/projects' },
  { name: 'Journey', href: '/#experience', path: '/' },
  { name: 'Contact', href: '/contact', path: '/contact' }
])

const activeAnchor = ref('#hero')

const isLinkActive = (link: { name: string, href: string, path: string }) => {
  if (link.path !== '/' && route.path === link.path) {
    return true
  }
  if (route.path === '/' && link.href.includes('#')) {
    const anchor = link.href.substring(link.href.indexOf('#'))
    return activeAnchor.value === anchor
  }
  return false
}

const navigateToLink = (e: MouseEvent, link: { name: string, href: string, path: string }) => {
  isMenuOpen.value = false

  if (link.href.includes('#')) {
    const anchor = link.href.substring(link.href.indexOf('#'))
    if (route.path === '/') {
      e.preventDefault()
      const target = document.querySelector(anchor) as HTMLElement | null
      if (target) {
        const yOffset = -80
        const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: 'smooth' })
        activeAnchor.value = anchor
      }
    } else {
      router.push('/' + anchor)
    }
  } else {
    router.push(link.href)
  }
}

const handleScroll = () => {
  if (route.path !== '/') return
  const scrollPosition = window.scrollY + 140

  const anchors = ['#hero', '#about', '#skills', '#architecture', '#projects', '#experience', '#philosophy', '#github', '#contact']
  const sections = anchors
    .map(anchor => {
      const el = document.querySelector(anchor) as HTMLElement | null
      return { anchor, offsetTop: el ? el.offsetTop : -1 }
    })
    .filter(item => item.offsetTop !== -1)
    .sort((a, b) => a.offsetTop - b.offsetTop)

  let current = '#hero'
  for (const s of sections) {
    if (s.offsetTop <= scrollPosition) {
      current = s.anchor
    }
  }

  activeAnchor.value = current
}

const isDark = ref(true)
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
    isDark.value = true
  }

  document.documentElement.classList.toggle('dark', isDark.value)
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>