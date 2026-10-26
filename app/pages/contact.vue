<template>
  <div class="py-24 sm:py-32 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
    
    <!-- Breadcrumb & Back Link -->
    <div class="flex items-center gap-2 text-xs font-mono text-slate-500">
      <NuxtLink to="/" class="hover:text-cyan-500 transition-colors">Home</NuxtLink>
      <span>/</span>
      <span class="text-cyan-600 dark:text-cyan-400 font-semibold">Contact</span>
    </div>

    <!-- Header Section -->
    <div class="max-w-2xl space-y-4">
      <span class="text-xs font-mono font-bold tracking-widest uppercase text-cyan-600 dark:text-cyan-400 block">
        GET IN TOUCH
      </span>
      <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
        Have an Idea? <br />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600">
          Let's Build Something Great.
        </span>
      </h1>
      <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
        I'm interested in connecting with developers, collaborating on meaningful projects, and exploring opportunities to build useful digital products.
      </p>
    </div>

    <!-- Contact Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      
      <!-- Left: Direct Channels & Verified Profiles -->
      <div class="lg:col-span-5 space-y-4">
        
        <!-- Telegram Card -->
        <div class="p-6 rounded-3xl bg-gradient-to-br from-sky-500/10 via-cyan-500/5 to-transparent border border-sky-500/30 dark:border-sky-500/20 shadow-sm flex items-center justify-between">
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">Telegram • Fastest Response</span>
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
            </div>
            <p class="text-base font-semibold text-slate-900 dark:text-white font-mono">
              @panhanheb
            </p>
            <p class="text-xs text-slate-500 dark:text-slate-400">Direct instant chat & quick triage</p>
          </div>
          <a :href="profileData.telegramUrl" target="_blank" rel="noopener noreferrer"
             class="px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold text-xs transition-colors shrink-0 flex items-center gap-1.5 shadow-sm">
            <span>Chat</span>
            <span class="material-symbols-outlined text-sm">open_in_new</span>
          </a>
        </div>

        <!-- Direct Email Card -->
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
          <div class="space-y-1">
            <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Direct Email</span>
            <p class="text-sm font-semibold text-slate-900 dark:text-white font-mono break-all">
              {{ profileData.email }}
            </p>
            <p class="text-xs text-slate-500 dark:text-slate-400">Project briefs & formal inquiries</p>
          </div>
          <div class="flex items-center gap-1.5 shrink-0">
            <a :href="`mailto:${profileData.email}`"
               class="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-cyan-600 hover:border-cyan-500 transition-colors"
               title="Send Email">
              <span class="material-symbols-outlined text-lg">mail</span>
            </a>
            <button @click="copyEmail" 
                    class="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-cyan-600 hover:border-cyan-500 transition-colors"
                    :title="copied ? 'Copied!' : 'Copy Email'">
              <span class="material-symbols-outlined text-lg">{{ copied ? 'check' : 'content_copy' }}</span>
            </button>
          </div>
        </div>

        <!-- Location Card -->
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
          <div class="space-y-1">
            <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Location & Timezone</span>
            <p class="text-sm font-semibold text-slate-900 dark:text-white">
              {{ profileData.location }}
            </p>
            <p class="text-xs text-slate-500 font-mono">{{ profileData.timezone }}</p>
          </div>
          <div class="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300">
            <span class="material-symbols-outlined text-xl">public</span>
          </div>
        </div>

        <!-- Professional Profiles -->
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
            Verified Profiles
          </span>
          <div class="grid grid-cols-2 gap-2">
            <a :href="profileData.githubUrl" target="_blank" rel="noopener noreferrer"
               class="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:border-cyan-500 transition-colors">
              <span class="flex items-center gap-1.5">
                <Icon name="logos:github-icon" class="text-sm" />
                <span>GitHub</span>
              </span>
              <span class="material-symbols-outlined text-xs text-slate-400">arrow_forward</span>
            </a>

            <a :href="profileData.linkedinUrl" target="_blank" rel="noopener noreferrer"
               class="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:border-cyan-500 transition-colors">
              <span class="flex items-center gap-1.5">
                <Icon name="logos:linkedin-icon" class="text-sm" />
                <span>LinkedIn</span>
              </span>
              <span class="material-symbols-outlined text-xs text-slate-400">arrow_forward</span>
            </a>
          </div>
        </div>

      </div>

      <!-- Right: Inquiry Form -->
      <div class="lg:col-span-7">
        <div class="p-7 sm:p-9 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          
          <div class="space-y-1">
            <h2 class="text-xl font-bold text-slate-900 dark:text-white">Send a Message</h2>
            <p class="text-xs text-slate-500 dark:text-slate-400">
              Inquiries are securely logged to Supabase and dispatched directly to Panha's Telegram for immediate notification.
            </p>
          </div>

          <!-- Alert -->
          <div v-if="statusMessage" 
               class="p-4 rounded-xl text-xs font-semibold border flex items-center gap-2.5 transition-all"
               :class="isSuccess ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400' : 'bg-rose-500/10 border-rose-500/20 text-rose-600 dark:text-rose-400'">
            <span class="material-symbols-outlined text-base">{{ isSuccess ? 'check_circle' : 'error' }}</span>
            <span>{{ statusMessage }}</span>
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-4">
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="contact-name" class="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Your Name *
                </label>
                <input id="contact-name" v-model="form.name" required placeholder="Jane Doe" 
                       class="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 transition-colors" />
              </div>

              <div>
                <label for="contact-email" class="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Email Address *
                </label>
                <input id="contact-email" v-model="form.email" type="email" required placeholder="jane@example.com" 
                       class="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 transition-colors" />
              </div>
            </div>

            <div>
              <label for="contact-subject" class="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Inquiry Topic
              </label>
              <select id="contact-subject" v-model="form.type" 
                      class="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 transition-colors">
                <option value="Mobile App Development">Mobile App Development (Flutter)</option>
                <option value="Full-Stack Web Development">Full-Stack Web Development (Vue 3 / Nuxt 4)</option>
                <option value="Cloud & Supabase Integration">Cloud & Supabase / Firebase Integration</option>
                <option value="Full-Time Engineering Role">Full-Time Engineering Opportunity</option>
                <option value="General Inquiry">General Collaboration</option>
              </select>
            </div>

            <div>
              <label for="contact-message" class="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Message *
              </label>
              <textarea id="contact-message" v-model="form.message" required rows="5" 
                        placeholder="Tell me about your project, timeline, or requirements..."
                        class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 transition-colors resize-none"></textarea>
            </div>

            <button type="submit" :disabled="isSubmitting" 
                    class="w-full btn-primary text-xs py-3.5 justify-center disabled:opacity-50">
              <span v-if="isSubmitting" class="w-3.5 h-3.5 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
              <span>{{ isSubmitting ? 'Transmitting Message...' : 'Send Message' }}</span>
              <span v-if="!isSubmitting" class="material-symbols-outlined text-sm">send</span>
            </button>

          </form>

        </div>
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { profileData } from '~/data/profile'

useHead({
  title: 'Contact Nheb Panha | Flutter Developer',
  meta: [
    { name: 'description', content: 'Contact Nheb Panha for full-time engineering roles, mobile architecture consultations, and freelance projects. Reachable via Email and Telegram.' }
  ]
})

const form = reactive({
  name: '',
  email: '',
  type: 'Mobile App Development',
  message: ''
})

const isSubmitting = ref(false)
const statusMessage = ref('')
const isSuccess = ref(true)

const copied = ref(false)
const copyEmail = () => {
  navigator.clipboard.writeText(profileData.email)
  copied.value = true
  setTimeout(() => { copied.value = false }, 2500)
}

const handleSubmit = async () => {
  if (isSubmitting.value) return
  isSubmitting.value = true
  statusMessage.value = ''

  try {
    const res: any = await $fetch('/api/contact', {
      method: 'POST',
      body: form
    })
    
    isSuccess.value = true
    statusMessage.value = res.supabaseSaved 
      ? 'Thank you! Your inquiry was safely recorded in Supabase and dispatched via Telegram.' 
      : 'Thank you! Your message was transmitted successfully.'
    
    form.name = ''
    form.email = ''
    form.message = ''
  } catch (error: any) {
    isSuccess.value = false
    statusMessage.value = error?.data?.statusMessage || `Failed to submit inquiry. Please email directly to ${profileData.email}`
  } finally {
    isSubmitting.value = false
  }
}
</script>
