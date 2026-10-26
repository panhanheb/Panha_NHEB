export default defineNuxtConfig({
  compatibilityDate: '2024-04-04',
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon'],
  ssr: false,
  tailwindcss: {
    config: {
      darkMode: 'class',
    }
  },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    // Server-only private secrets (never exposed to browser client)
    geminiApiKey: process.env.NUXT_GEMINI_API_KEY,
    supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY || '',
    telegramBotToken: process.env.NUXT_TELEGRAM_BOT_TOKEN || '',
    telegramChatId: process.env.NUXT_TELEGRAM_CHAT_ID || '',
    
    // Public client-accessible configuration
    public: {
      supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL || '',
      supabaseAnonKey: process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY || '',
      siteUrl: 'https://nheb-panha.vercel.app'
    }
  },
  app: {
    head: {
      title: 'Nheb Panha — Flutter Developer | Mobile App Architect',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Nheb Panha is a Middle-Level Flutter Developer & Mobile App Architect based in Phnom Penh, Cambodia. Specializing in Flutter, Dart, Supabase, Firebase, and Clean Architecture.'
        },
        {
          name: 'keywords',
          content: 'Nheb Panha, Flutter Developer, Mobile App Architect, Dart, Supabase, Firebase, Vue 3, Nuxt, Phnom Penh, Mobile Development'
        },
        { name: 'author', content: 'Nheb Panha' },
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://nheb-panha.vercel.app/' },
        { property: 'og:title', content: 'Nheb Panha — Flutter Developer | Mobile App Architect' },
        {
          property: 'og:description',
          content: 'Building reliable, intuitive, and maintainable cross-platform mobile applications with Flutter, Supabase, Firebase, and Clean Architecture.'
        },
        { property: 'og:image', content: '/image/panha_profile.png' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Nheb Panha — Flutter Developer | Mobile App Architect' },
        {
          name: 'twitter:description',
          content: 'Building reliable, intuitive, and maintainable cross-platform mobile applications with Flutter, Supabase, Firebase, and Clean Architecture.'
        },
        { name: 'twitter:image', content: '/image/panha_profile.png' }
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap'
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/logo_test.png'
        },
        {
          rel: 'canonical',
          href: 'https://nheb-panha.vercel.app/'
        }
      ]
    }
  }
})