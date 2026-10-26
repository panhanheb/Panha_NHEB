<template>
  <footer class="w-full py-12 border-t border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl relative z-10 text-xs">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      <!-- Top Row -->
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
        
        <!-- Brand Info -->
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-bold text-xs shadow-sm">
            NP
          </div>
          <div>
            <div class="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
              <span>Nheb Panha</span>
              <span class="text-slate-400 font-normal">•</span>
              <span class="text-xs text-cyan-600 dark:text-cyan-400 font-semibold">Flutter Developer | Mobile App Architect</span>
            </div>
            <p class="text-slate-500 dark:text-slate-400 text-[11px]">
              Phnom Penh, Cambodia • Clean Architecture & Mobile Engineering
            </p>
          </div>
        </div>

        <!-- Back to Top Button -->
        <button @click="scrollToTop"
                class="px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-cyan-500 text-slate-600 dark:text-slate-400 hover:text-cyan-500 flex items-center gap-1.5 transition-colors">
          <span class="material-symbols-outlined text-sm">arrow_upward</span>
          <span>Back to Top</span>
        </button>

      </div>

      <!-- Bottom Row: Nav Links, Socials & Copyright -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        
        <!-- Navigation Links -->
        <div class="flex flex-wrap items-center gap-x-5 gap-y-2 text-slate-600 dark:text-slate-300 font-medium">
          <NuxtLink to="/" class="hover:text-cyan-500 transition-colors">Home</NuxtLink>
          <NuxtLink to="/about" class="hover:text-cyan-500 transition-colors">About</NuxtLink>
          <NuxtLink to="/projects" class="hover:text-cyan-500 transition-colors">Projects</NuxtLink>
          <NuxtLink to="/contact" class="hover:text-cyan-500 transition-colors">Contact</NuxtLink>
          <NuxtLink to="/privacy" class="hover:text-cyan-500 transition-colors">Privacy</NuxtLink>
        </div>

        <!-- Social Profiles -->
        <div class="flex items-center gap-3 text-slate-500 dark:text-slate-400">
          <a v-for="social in socialLinks" :key="social.name" :href="social.href" target="_blank" rel="noopener noreferrer"
             class="hover:text-cyan-500 transition-colors">
            {{ social.name }}
          </a>
        </div>

      </div>

      <!-- Copyright & Closing Tagline -->
      <div class="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-slate-400 border-t border-slate-100 dark:border-slate-800/60">
        <span>&copy; {{ currentYear }} Nheb Panha. All rights reserved.</span>
        <span class="italic font-mono">Designed with intention. Built with code.</span>
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
import { profileData } from '~/data/profile'

const currentYear = new Date().getFullYear()

const socialLinks = [
  { name: 'GitHub', href: profileData.githubUrl },
  { name: 'LinkedIn', href: profileData.linkedinUrl },
  { name: 'Telegram', href: profileData.telegramUrl },
  { name: 'Email', href: `mailto:${profileData.email}` }
]

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>