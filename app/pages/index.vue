<template>
  <div class="relative">
    <HeroSection />
    <About />
    <Skills />
    <Architecture />
    <Portfolio />
    <WorkTimeline />
    <DevelopmentPhilosophy />
    <GitHubSection />
    <ExperienceContact />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '~/components/HeroSection.vue'
import About from '~/components/About.vue'
import Skills from '~/components/Skills.vue'
import Architecture from '~/components/Architecture.vue'
import Portfolio from '~/components/Portfolio.vue'
import WorkTimeline from '~/components/WorkTimeline.vue'
import DevelopmentPhilosophy from '~/components/DevelopmentPhilosophy.vue'
import GitHubSection from '~/components/GitHubSection.vue'
import ExperienceContact from '~/components/ExperienceContact.vue'

useHead({
  title: 'Nheb Panha — Flutter Developer | Mobile App Architect',
  meta: [
    { 
      name: 'description', 
      content: 'Personal portfolio of Nheb Panha, a Flutter Developer based in Phnom Penh, Cambodia specializing in mobile architecture, Supabase, Firebase, and clean software engineering.' 
    }
  ]
})
</script>