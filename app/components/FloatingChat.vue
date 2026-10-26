<template>
  <div class="fixed bottom-6 right-6 z-[100] flex flex-col items-end font-sans">
    
    <!-- Chat Window Dialog -->
    <Transition name="chat-window">
      <div v-if="isOpen" 
           class="mb-3 w-[calc(100vw-3rem)] sm:w-96 max-w-sm h-[480px] flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto">
        
        <!-- Header -->
        <div class="px-4 py-3 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xs">
              AI
            </div>
            <div>
              <h3 class="text-xs font-bold leading-none">Portfolio Assistant</h3>
              <p class="text-[10px] text-cyan-400 font-mono mt-0.5 flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Powered by Gemini & Supabase</span>
              </p>
            </div>
          </div>

          <div class="flex items-center gap-1">
            <button @click="resetConversation" class="p-1 rounded-lg text-slate-400 hover:text-white transition-colors" title="Clear Chat">
              <span class="material-symbols-outlined text-base">restart_alt</span>
            </button>
            <button @click="isOpen = false" class="p-1 rounded-lg text-slate-400 hover:text-white transition-colors" title="Close Assistant">
              <span class="material-symbols-outlined text-base">close</span>
            </button>
          </div>
        </div>

        <!-- Quick Question Chips -->
        <div class="px-3 py-2 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-100 dark:border-slate-800 flex gap-1.5 overflow-x-auto no-scrollbar">
          <button v-for="chip in quickChips" :key="chip" @click="sendQuick(chip)"
                  class="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-700/80 border border-slate-200 dark:border-slate-600 text-[10px] font-semibold text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 whitespace-nowrap transition-colors shrink-0">
            {{ chip }}
          </button>
        </div>

        <!-- Messages Scroll Container -->
        <div ref="messageContainer" class="flex-1 overflow-y-auto p-3.5 space-y-3 bg-white dark:bg-slate-900 text-xs">
          <div v-for="(msg, index) in messages" :key="index"
               :class="['flex flex-col', msg.role === 'user' ? 'items-end' : 'items-start']">
            <span class="text-[9px] font-semibold text-slate-400 mb-1 px-1">
              {{ msg.role === 'user' ? 'You' : 'Panha Assistant' }}
            </span>
            <div :class="[
              'p-3 rounded-2xl max-w-[85%] leading-relaxed',
              msg.role === 'user' 
                ? 'bg-cyan-600 text-white rounded-br-none' 
                : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-bl-none border border-slate-200/60 dark:border-slate-700/60'
            ]">
              {{ msg.content }}
            </div>
          </div>

          <!-- Typing Indicator -->
          <div v-if="isTyping" class="flex flex-col items-start">
            <span class="text-[9px] font-semibold text-slate-400 mb-1 px-1">Panha Assistant</span>
            <div class="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 rounded-bl-none flex items-center gap-1.5 border border-slate-200/60 dark:border-slate-700/60">
              <span class="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-bounce" style="animation-delay: 0ms"></span>
              <span class="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-bounce" style="animation-delay: 150ms"></span>
              <span class="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-bounce" style="animation-delay: 300ms"></span>
            </div>
          </div>
        </div>

        <!-- Input Box -->
        <div class="p-2.5 bg-slate-50 dark:bg-slate-800/80 border-t border-slate-200 dark:border-slate-800">
          <form @submit.prevent="handleSend" class="flex items-center gap-1.5">
            <input v-model="input" 
                   type="text" 
                   placeholder="Ask about skills, projects, or architecture..." 
                   class="flex-1 px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 transition-colors"
                   :disabled="isTyping" />
            <button type="submit" 
                    class="p-2 rounded-xl bg-cyan-600 text-white hover:bg-cyan-500 disabled:opacity-40 transition-colors shrink-0"
                    :disabled="!input.trim() || isTyping">
              <span class="material-symbols-outlined text-sm">send</span>
            </button>
          </form>
        </div>

      </div>
    </Transition>

    <!-- Floating Action Button (FAB) -->
    <button @click="isOpen = !isOpen" 
            class="w-12 h-12 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all"
            aria-label="Open AI Assistant">
      <span class="material-symbols-outlined text-xl transition-transform" :class="isOpen ? 'rotate-90' : ''">
        {{ isOpen ? 'close' : 'smart_toy' }}
      </span>
    </button>

  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'

const isOpen = ref(false)
const input = ref('')
const isTyping = ref(false)
const messageContainer = ref<HTMLElement | null>(null)

const quickChips = [
  'Flutter skills',
  'Clean Architecture',
  'Red Ant Express',
  'How to contact'
]

const initialGreeting = "Hello! I am Panha's AI Portfolio Assistant. Ask me about his Flutter mobile apps, Clean Architecture practices, Supabase projects, or how to get in touch!"

const messages = ref<{ role: 'user' | 'assistant'; content: string }[]>([
  { role: 'assistant', content: initialGreeting }
])

const resetConversation = () => {
  messages.value = [{ role: 'assistant', content: initialGreeting }]
}

const scrollToBottom = () => {
  nextTick(() => {
    if (messageContainer.value) {
      messageContainer.value.scrollTop = messageContainer.value.scrollHeight
    }
  })
}

const sendQuick = (chipText: string) => {
  input.value = chipText
  handleSend()
}

const handleSend = async () => {
  const text = input.value.trim()
  if (!text || isTyping.value) return

  messages.value.push({ role: 'user', content: text })
  input.value = ''
  isTyping.value = true
  scrollToBottom()

  try {
    const formattedHistory = messages.value.slice(0, -1).map(m => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }]
    }))

    const res: any = await $fetch('/api/chat', {
      method: 'POST',
      body: {
        prompt: text,
        history: formattedHistory
      }
    })

    const botReply = res?.responseText || "I am available to assist you with inquiries about Nheb Panha's Flutter development experience, Clean Architecture, and projects."
    messages.value.push({ role: 'assistant', content: botReply })
  } catch (err) {
    messages.value.push({
      role: 'assistant',
      content: "I'm momentarily unavailable, but feel free to review the projects on this page or email Panha directly at samlot.development@gmail.com."
    })
  } finally {
    isTyping.value = false
    scrollToBottom()
  }
}
</script>

<style scoped>
.chat-window-enter-active,
.chat-window-leave-active {
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.chat-window-enter-from,
.chat-window-leave-to {
  opacity: 0;
  transform: translateY(12px) scale(0.96);
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
