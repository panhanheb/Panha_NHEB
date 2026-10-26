<template>
  <div class="py-24 sm:py-32 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
    
    <!-- Breadcrumb & Back Link -->
    <div class="flex items-center gap-2 text-xs font-mono text-slate-500">
      <NuxtLink to="/" class="hover:text-cyan-500 transition-colors">Home</NuxtLink>
      <span>/</span>
      <span class="text-cyan-600 dark:text-cyan-400 font-semibold">About</span>
    </div>

    <!-- Page Header & Hero Pitch -->
    <div class="space-y-4">
      <span class="text-xs font-mono font-bold tracking-widest uppercase text-cyan-600 dark:text-cyan-400 block">
        ABOUT NHEB PANHA
      </span>
      <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
        Turning Ideas Into Thoughtful <br class="hidden sm:inline" />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600">
          Digital Experiences.
        </span>
      </h1>
      <p class="text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
        A Middle-Level Flutter Developer based in Phnom Penh, Cambodia, specializing in cross-platform mobile architecture, cloud integrations, and polished user experiences.
      </p>
    </div>

    <!-- Biography & Portrait Split -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      
      <!-- Left: Portrait Card & Key Facts -->
      <div class="lg:col-span-5 space-y-6">
        <div class="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl">
          <div class="aspect-[4/5] overflow-hidden bg-slate-100 dark:bg-slate-800">
            <img :src="profileData.avatarStudio" alt="Nheb Panha — Flutter Developer"
                 class="w-full h-full object-cover object-top" />
          </div>
          <div class="p-6 space-y-3">
            <div class="flex items-center justify-between">
              <div>
                <h2 class="text-lg font-bold text-slate-900 dark:text-white">Nheb Panha</h2>
                <p class="text-xs text-cyan-600 dark:text-cyan-400 font-semibold">Middle-Level Flutter Developer</p>
              </div>
              <span class="material-symbols-outlined text-cyan-500 text-xl" title="Verified Profile">verified</span>
            </div>

            <p class="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 pt-1 border-t border-slate-100 dark:border-slate-800">
              <span class="material-symbols-outlined text-sm">location_on</span>
              <span>Phnom Penh, Cambodia (UTC+7)</span>
            </p>

            <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between gap-2">
              <a :href="profileData.githubUrl" target="_blank" rel="noopener noreferrer"
                 class="flex-1 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-cyan-500/10 hover:text-cyan-500 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors">
                <Icon name="logos:github-icon" class="text-sm" />
                <span>GitHub</span>
              </a>
              <a :href="profileData.linkedinUrl" target="_blank" rel="noopener noreferrer"
                 class="flex-1 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-cyan-500/10 hover:text-cyan-500 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors">
                <Icon name="logos:linkedin-icon" class="text-sm" />
                <span>LinkedIn</span>
              </a>
              <a :href="profileData.telegramUrl" target="_blank" rel="noopener noreferrer"
                 class="py-2 px-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors">
                <span>Telegram</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Quick Facts -->
        <div class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 space-y-3 text-xs">
          <span class="font-mono font-bold uppercase tracking-wider text-slate-400 block">Engineering Focus</span>
          <div class="space-y-2">
            <div class="flex justify-between py-1 border-b border-slate-200/60 dark:border-slate-700/60">
              <span class="text-slate-500">Core Framework</span>
              <span class="font-semibold text-slate-800 dark:text-slate-200">Flutter 3.x & Dart</span>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-200/60 dark:border-slate-700/60">
              <span class="text-slate-500">Architecture</span>
              <span class="font-semibold text-slate-800 dark:text-slate-200">Clean Architecture & BLoC</span>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-200/60 dark:border-slate-700/60">
              <span class="text-slate-500">Cloud Services</span>
              <span class="font-semibold text-slate-800 dark:text-slate-200">Supabase & Firebase</span>
            </div>
            <div class="flex justify-between py-1">
              <span class="text-slate-500">Education</span>
              <span class="font-semibold text-slate-800 dark:text-slate-200">IT / CS (RUPP, Ongoing)</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Detailed Story & Engineering Approach -->
      <div class="lg:col-span-7 space-y-8">
        
        <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h2 class="text-xl font-bold text-slate-900 dark:text-white">
            Professional Biography
          </h2>
          <div class="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            <p v-for="(p, i) in profileData.bioFull" :key="i">
              {{ p }}
            </p>
          </div>
        </div>

        <!-- What I Care About -->
        <div class="space-y-4">
          <h2 class="text-xl font-bold text-slate-900 dark:text-white">
            Engineering Values & What I Care About
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div v-for="item in profileData.whatICareAbout" :key="item.title"
                 class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
              <div class="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                <span class="material-symbols-outlined text-lg">{{ item.icon }}</span>
              </div>
              <h3 class="font-bold text-sm text-slate-900 dark:text-white">
                {{ item.title }}
              </h3>
              <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- Professional Interests -->
        <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h2 class="text-xl font-bold text-slate-900 dark:text-white">
            Professional Interests & Focus Areas
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div v-for="(interest, i) in profileData.interests" :key="i"
                 class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 text-xs font-medium text-slate-800 dark:text-slate-200 flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
              <span>{{ interest }}</span>
            </div>
          </div>
        </div>

        <!-- Bottom CTAs -->
        <div class="pt-4 flex flex-wrap items-center gap-4">
          <NuxtLink to="/projects" class="btn-primary text-xs">
            <span>Explore Project Case Studies</span>
            <span class="material-symbols-outlined text-sm">arrow_forward</span>
          </NuxtLink>
          <NuxtLink to="/contact" class="btn-secondary text-xs">
            <span>Get In Touch</span>
          </NuxtLink>
        </div>

      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import { profileData } from '~/data/profile'

useHead({
  title: 'About Nheb Panha | Flutter Developer & Mobile App Architect',
  meta: [
    { name: 'description', content: 'Professional background, software engineering philosophy, and capabilities of Nheb Panha, a Flutter Developer based in Phnom Penh, Cambodia.' }
  ]
})
</script>
