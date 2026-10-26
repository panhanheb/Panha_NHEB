<script setup lang="ts">
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import FloatingChat from '~/components/FloatingChat.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-[var(--bg-page)] text-[var(--text-primary)] transition-colors duration-300">
    <Header />
    <main class="flex-1">
      <slot />
    </main>
    <Footer />
    <FloatingChat />
  </div>
</template>