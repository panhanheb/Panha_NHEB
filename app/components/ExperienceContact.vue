<template>
  <section id="contact" class="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref="contactRef">
    
    <div class="transition-all duration-700 ease-out"
         :class="contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
      
      <!-- Section Header -->
      <div class="max-w-2xl mb-12 sm:mb-16">
        <span class="text-xs font-mono font-bold tracking-widest uppercase text-cyan-600 dark:text-cyan-400 block mb-2">
          Get In Touch
        </span>
        <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          Let's Discuss Your Next Project.
        </h2>
        <p class="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Open for full-time Flutter engineering opportunities, mobile architecture consultations, and collaborative freelance projects.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        <!-- Left: Direct Contact Alternatives & Profiles -->
        <div class="lg:col-span-5 space-y-4">
          
          <!-- Telegram Direct Card (Fastest Response) -->
          <div class="p-5 rounded-2xl bg-gradient-to-br from-sky-500/10 via-cyan-500/5 to-transparent border border-sky-500/30 dark:border-sky-500/20 shadow-sm flex items-center justify-between">
            <div class="space-y-1">
              <div class="flex items-center gap-2">
                <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">Telegram • Fastest Response</span>
                <span class="relative flex h-2 w-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
              </div>
              <p class="text-sm font-semibold text-slate-900 dark:text-white font-mono">
                @panhanheb
              </p>
              <p class="text-xs text-slate-500 dark:text-slate-400">Instant messaging & direct conversation</p>
            </div>
            <a href="https://t.me/panhanheb" target="_blank" rel="noopener noreferrer"
               class="px-3.5 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold text-xs transition-colors shrink-0 flex items-center gap-1.5 shadow-sm"
               title="Chat on Telegram">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              <span>Chat</span>
            </a>
          </div>

          <!-- Email Card -->
          <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
            <div class="space-y-1">
              <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Direct Email</span>
              <p class="text-sm font-semibold text-slate-900 dark:text-white font-mono break-all">
                samlot.development@gmail.com
              </p>
              <p class="text-xs text-slate-500 dark:text-slate-400">Project briefs, formal offers & inquiries</p>
            </div>
            <div class="flex items-center gap-1.5 shrink-0">
              <a href="mailto:samlot.development@gmail.com"
                 class="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-cyan-600 hover:border-cyan-500 transition-colors"
                 title="Send email">
                <span class="material-symbols-outlined text-lg">mail</span>
              </a>
              <button @click="copyEmail" 
                      class="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-cyan-600 hover:border-cyan-500 transition-colors"
                      :title="copied ? 'Copied!' : 'Copy to clipboard'">
                <span class="material-symbols-outlined text-lg">{{ copied ? 'check' : 'content_copy' }}</span>
              </button>
            </div>
          </div>

          <!-- Location & Availability Card -->
          <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
            <div class="space-y-1">
              <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Location & Timezone</span>
              <p class="text-sm font-semibold text-slate-900 dark:text-white">
                Phnom Penh, Cambodia
              </p>
              <p class="text-xs text-slate-500 font-mono">UTC+7 • Indochina Time</p>
            </div>
            <div class="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300">
              <span class="material-symbols-outlined text-xl">public</span>
            </div>
          </div>

          <!-- Verified Social Links -->
          <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
              Professional Profiles
            </span>
            <div class="grid grid-cols-2 gap-2">
              <a href="https://github.com/panhanheb" target="_blank" rel="noopener noreferrer"
                 class="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:border-cyan-500 transition-colors">
                <span class="flex items-center gap-1.5">
                  <Icon name="logos:github-icon" class="text-sm" />
                  <span>GitHub</span>
                </span>
                <span class="material-symbols-outlined text-xs text-slate-400">arrow_forward</span>
              </a>

              <a href="https://linkedin.com/in/nhebpanha" target="_blank" rel="noopener noreferrer"
                 class="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:border-cyan-500 transition-colors">
                <span class="flex items-center gap-1.5">
                  <Icon name="logos:linkedin-icon" class="text-sm" />
                  <span>LinkedIn</span>
                </span>
                <span class="material-symbols-outlined text-xs text-slate-400">arrow_forward</span>
              </a>
            </div>
          </div>

        </div>

        <!-- Right: Inquiry Form Panel -->
        <div class="lg:col-span-7">
          <div class="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            
            <div class="space-y-1">
              <h3 class="text-lg font-bold text-slate-900 dark:text-white">Send a Direct Message</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400">
                Inquiries are safely recorded in Supabase and dispatched straight to Panha's Telegram for rapid response.
              </p>
            </div>

            <!-- Direct Channels Quick Bar -->
            <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex flex-wrap items-center justify-between gap-2 text-xs">
              <span class="text-slate-500 dark:text-slate-400 font-medium">Prefer direct chat?</span>
              <div class="flex items-center gap-2">
                <a href="https://t.me/panhanheb" target="_blank" rel="noopener noreferrer"
                   class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-600 dark:text-sky-400 font-semibold transition-colors">
                  <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  <span>Telegram (@panhanheb)</span>
                </a>
                <a href="mailto:samlot.development@gmail.com"
                   class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 font-semibold transition-colors">
                  <span class="material-symbols-outlined text-sm">mail</span>
                  <span>Email</span>
                </a>
              </div>
            </div>

            <!-- Feedback Alert Banner -->
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
                         class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 transition-colors" />
                </div>

                <div>
                  <label for="contact-email" class="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Email Address *
                  </label>
                  <input id="contact-email" v-model="form.email" type="email" required placeholder="jane@example.com" 
                         class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 transition-colors" />
                </div>
              </div>

              <div>
                <label for="contact-type" class="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Inquiry Topic
                </label>
                <select id="contact-type" v-model="form.type" 
                        class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 transition-colors">
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
                <textarea id="contact-message" v-model="form.message" required rows="4" 
                          placeholder="Tell me about your project, timeline, or requirements..."
                          class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 transition-colors resize-none"></textarea>
              </div>

              <button type="submit" :disabled="isSubmitting" 
                      class="w-full btn-primary text-xs py-3 justify-center disabled:opacity-50">
                <span v-if="isSubmitting" class="w-3.5 h-3.5 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                <span>{{ isSubmitting ? 'Transmitting Message...' : 'Send Message' }}</span>
                <span v-if="!isSubmitting" class="material-symbols-outlined text-sm">send</span>
              </button>

            </form>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue"
import { useScrollAnimate } from '~/composables/useScrollAnimate'

const { sectionRef: contactRef, isVisible: contactVisible } = useScrollAnimate(0.1)

const form = reactive({
  name: "",
  email: "",
  type: "Mobile App Development",
  message: ""
})

const isSubmitting = ref(false)
const statusMessage = ref("")
const isSuccess = ref(true)

const copied = ref(false)
const copyEmail = () => {
  navigator.clipboard.writeText('samlot.development@gmail.com')
  copied.value = true
  setTimeout(() => { copied.value = false }, 2500)
}

const handleSubmit = async () => {
  if (isSubmitting.value) return
  isSubmitting.value = true
  statusMessage.value = ""

  try {
    const res: any = await $fetch('/api/contact', {
      method: 'POST',
      body: form
    })
    
    isSuccess.value = true
    statusMessage.value = res.supabaseSaved 
      ? 'Thank you! Your message was saved to Supabase and dispatched via Telegram.' 
      : 'Thank you! Your inquiry was sent successfully.'
    
    form.name = ''
    form.email = ''
    form.message = ''
  } catch (error: any) {
    isSuccess.value = false
    statusMessage.value = error?.data?.statusMessage || 'Failed to submit inquiry. Please email directly to samlot.development@gmail.com'
  } finally {
    isSubmitting.value = false
  }
}
</script>