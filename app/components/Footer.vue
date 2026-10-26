<template>
  <footer class="w-full py-10 border-t border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl relative z-10 text-xs">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      
      <!-- Brand & Copy -->
      <div class="flex items-center gap-2.5">
        <div class="w-7 h-7 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-bold text-xs">
          NP
        </div>
        <div class="text-slate-600 dark:text-slate-400">
          <span>&copy; {{ currentYear }} Nheb Panha. Engineered with Nuxt 4, Flutter, and Supabase.</span>
        </div>
      </div>

      <!-- Links -->
      <div class="flex items-center gap-4 text-slate-500 dark:text-slate-400">
        <a v-for="social in socialLinks" :key="social.name" :href="social.href" target="_blank" rel="noopener noreferrer"
           class="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
          {{ social.name }}
        </a>
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/panhanheb' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/nhebpanha' },
  { name: 'Portfolio', href: 'https://nheb-panha.vercel.app/' },
  { name: 'Email', href: 'mailto:samlot.development@gmail.com' }
]
</script>