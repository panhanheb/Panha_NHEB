import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)

  const { name, email, type, message } = body || {}

  // Basic validation
  if (!name || typeof name !== 'string' || !name.trim()) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Please provide a valid name.',
    })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Please provide a valid email address.',
    })
  }

  if (!message || typeof message !== 'string' || !message.trim()) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Please provide a valid message.',
    })
  }

  const sanitizedName = name.trim().slice(0, 100)
  const sanitizedEmail = email.trim().slice(0, 150)
  const sanitizedType = (type || 'General Contact').toString().trim().slice(0, 80)
  const sanitizedMessage = message.trim().slice(0, 2000)

  let supabaseSaved = false
  let telegramSent = false

  // 1. Save to Supabase if configured
  const supabaseUrl = config.public.supabaseUrl as string
  const supabaseKey = (config.supabaseServiceRoleKey || config.public.supabaseAnonKey) as string

  if (supabaseUrl && supabaseKey && supabaseUrl.startsWith('http')) {
    try {
      const supabase = createClient(supabaseUrl, supabaseKey)
      const { error } = await supabase.from('contact_submissions').insert([
        {
          name: sanitizedName,
          email: sanitizedEmail,
          message: sanitizedMessage,
          type: sanitizedType,
          status: 'unread'
        }
      ])
      if (!error) {
        supabaseSaved = true
      } else {
        console.warn('Supabase DB Insert Warning:', error.message)
      }
    } catch (err: any) {
      console.error('Supabase DB Insert Exception:', err?.message || err)
    }
  }

  // 2. Notify Telegram if token is set (server-only private config)
  const telegramBotToken = (config.telegramBotToken || (config.public as any)?.telegramBotToken) as string
  const telegramChatId = (config.telegramChatId || (config.public as any)?.telegramChatId) as string

  if (telegramBotToken && telegramChatId) {
    const text = `
✨ *New Portfolio Contact* ✨

👨‍💻 *Name:* ${sanitizedName}
📧 *Email:* ${sanitizedEmail}
📌 *Type:* ${sanitizedType}
💬 *Message:*
${sanitizedMessage}
───────────────
💾 *Supabase Status:* ${supabaseSaved ? 'Saved to DB ✅' : 'Demo / Standby ⚡'}
`.trim()

    const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`
    try {
      await $fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: text,
          parse_mode: 'Markdown',
        })
      })
      telegramSent = true
    } catch (error) {
      console.error('Telegram API Error:', error)
    }
  }

  return {
    success: true,
    supabaseSaved,
    telegramSent,
    message: 'Submission received successfully!'
  }
})
