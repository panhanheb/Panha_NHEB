<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-6 bg-[var(--bg-page)] text-[var(--text-primary)]">
    
    <div class="max-w-md w-full text-center space-y-6">
      
      <!-- Monogram -->
      <div class="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-500 border border-cyan-500/20 mx-auto flex items-center justify-center font-mono font-black text-lg">
        NP
      </div>

      <div class="space-y-2">
        <span class="text-xs font-mono font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
          Error {{ error.statusCode || 404 }}
        </span>
        <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          {{ error.statusCode === 404 ? 'Page Not Found' : 'An Unexpected Error Occurred' }}
        </h1>
        <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {{ error.message || 'The page or resource you were trying to access does not exist or has been moved.' }}
        </p>
      </div>

      <div class="pt-2 flex justify-center gap-3">
        <button @click="handleClearError" class="btn-primary text-xs">
          <span class="material-symbols-outlined text-base">home</span>
          <span>Back to Home</span>
        </button>
        <NuxtLink to="/projects" class="btn-secondary text-xs">
          <span>View Projects</span>
        </NuxtLink>
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  error: {
    type: Object,
    default: () => ({ statusCode: 404, message: 'Page not found' })
  }
})

const handleClearError = () => {
  clearError({ redirect: '/' })
}
</script>
