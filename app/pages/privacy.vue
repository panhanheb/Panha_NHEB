<template>
  <div class="py-24 sm:py-32 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
    
    <!-- Breadcrumb -->
    <div class="flex items-center gap-2 text-xs font-mono text-slate-500">
      <NuxtLink to="/" class="hover:text-cyan-500 transition-colors">Home</NuxtLink>
      <span>/</span>
      <span class="text-cyan-600 dark:text-cyan-400 font-semibold">Privacy Policy</span>
    </div>

    <!-- Header -->
    <div class="space-y-3">
      <span class="text-xs font-mono font-bold tracking-widest uppercase text-cyan-600 dark:text-cyan-400 block">
        SECURITY & DATA PROTECTION
      </span>
      <h1 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        Privacy & Data Handling
      </h1>
      <p class="text-xs font-mono text-slate-400">
        Last updated: October 2026 • Effective immediately
      </p>
    </div>

    <!-- Content Sections -->
    <div class="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
      
      <div class="space-y-3">
        <h2 class="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span class="material-symbols-outlined text-cyan-500 text-lg">shield</span>
          <span>1. Introduction & Transparency</span>
        </h2>
        <p>
          This website is the personal professional developer portfolio of Nheb Panha, hosted publicly to demonstrate software engineering capabilities. Protecting your privacy is paramount. This page clarifies what minimal data is collected and how it is securely processed.
        </p>
      </div>

      <div class="space-y-3">
        <h2 class="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span class="material-symbols-outlined text-cyan-500 text-lg">database</span>
          <span>2. Data Collected via Contact Form</span>
        </h2>
        <p>
          When you submit an inquiry through the Contact section or contact page, the form collects only the information you explicitly provide:
        </p>
        <ul class="list-disc list-inside space-y-1.5 pl-2 text-xs sm:text-sm">
          <li><strong>Name:</strong> To identify who is contacting.</li>
          <li><strong>Email Address:</strong> To reply to your inquiry.</li>
          <li><strong>Inquiry Topic & Message:</strong> To understand project requirements or role specifications.</li>
        </ul>
        <p class="pt-1">
          This data is saved directly to a private PostgreSQL table hosted on Supabase protected with Row-Level Security (RLS) policies and dispatched via private server-side webhook to the developer's Telegram.
        </p>
      </div>

      <div class="space-y-3">
        <h2 class="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span class="material-symbols-outlined text-cyan-500 text-lg">block</span>
          <span>3. No Cookies or Invasive Tracking</span>
        </h2>
        <p>
          This portfolio does not utilize third-party tracking pixels, advertising networks, or invasive profiling cookies. Selected theme preferences (dark/light) are stored locally in your browser's <code class="font-mono text-cyan-500">localStorage</code> purely for client-side display persistence.
        </p>
      </div>

      <div class="space-y-3">
        <h2 class="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span class="material-symbols-outlined text-cyan-500 text-lg">mail</span>
          <span>4. Inquiries & Data Removal</span>
        </h2>
        <p>
          If you have sent a message through this platform and would like your record permanently removed from the database, please send a deletion request to <a :href="`mailto:${profileData.email}`" class="text-cyan-500 font-semibold hover:underline">{{ profileData.email }}</a> and it will be deleted promptly.
        </p>
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import { profileData } from '~/data/profile'

useHead({
  title: 'Privacy Policy | Nheb Panha Portfolio',
  meta: [
    { name: 'description', content: 'Privacy and data protection policy for Nheb Panha personal portfolio website.' }
  ]
})
</script>
