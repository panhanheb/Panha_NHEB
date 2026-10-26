# 🚀 Nheb Panha — Next-Gen Full-Stack & Mobile Architect Portfolio

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:00dc82,50:2563eb,100:ec4899&height=180&section=header&text=NHEB%20PANHA&fontSize=42&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Full-Stack%20Engineer%20%7C%20Flutter%20Architect%20%7C%20Cloud%20Solutions&descFontSize=16&descAlignY=58" width="100%" alt="Nheb Panha Portfolio Header" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Nuxt-4.x-00DC82?style=for-the-badge&logo=nuxtdotjs&logoColor=white" alt="Nuxt" />
  <img src="https://img.shields.io/badge/Vue.js-3.5-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white" alt="Vue 3" />
  <img src="https://img.shields.io/badge/Flutter-3.x-02569B?style=for-the-badge&logo=flutter&logoColor=white" alt="Flutter" />
  <img src="https://img.shields.io/badge/Supabase-Database-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
  <img src="https://img.shields.io/badge/Google%20Gemini-AI%20Assistant-8E75C2?style=for-the-badge&logo=googlegemini&logoColor=white" alt="Gemini AI" />
  <img src="https://img.shields.io/badge/TailwindCSS-Styling-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind" />
</p>

---

## 📑 Table of Contents

- [🎯 Role of the Project](#-role-of-the-project)
- [👨‍💻 Developer Role & Responsibilities](#-developer-role--responsibilities)
- [🏛️ System Architecture & Component Roles](#️-system-architecture--component-roles)
- [✨ Key Features & Modules](#-key-features--modules)
- [🛠️ Tech Stack & Technologies](#️-tech-stack--technologies)
- [🗄️ Database Schema & Services](#️-database-schema--services)
- [🚀 Getting Started & Setup](#-getting-started--setup)
- [📂 Directory Structure](#-directory-structure)
- [📬 Contact & Connect](#-contact--connect)

---

## 🎯 Role of the Project

The **Nheb Panha Portfolio Platform** is an enterprise-grade, interactive web application engineered to demonstrate modern full-stack web and cross-platform mobile architectural skills. Beyond acting as a traditional digital CV, this project serves multiple critical roles:

### 1. Proof of Technical Mastery & Architecture Demonstration
* Demonstrates high-performance frontend engineering with **Nuxt 4 / Vue 3 Composition API**.
* Showcases mastery over modern reactive state management, asynchronous data fetching, and fluid UI micro-interactions.
* Serves as a reference implementation combining **Flutter** cross-platform development paradigms with modern cloud backends (**Supabase** & **Laravel**).

### 2. Intelligent AI Portfolio Representative
* Integrates **Google Gemini Generative AI** (`@google/generative-ai`) via a resilient serverless Nitro API backend.
* Acts as an autonomous 24/7 digital concierge that answers visitor inquiries regarding professional skills, past projects, domain knowledge, and career timeline.

### 3. Automated Client Acquisition & Communication Pipeline
* Streamlines prospective client and recruiter inquiries through an interactive contact portal.
* Dispatches instantaneous real-time alerts directly to the developer's **Telegram** via custom bot webhooks while securely persisting leads in a PostgreSQL database with Row-Level Security (RLS).

### 4. Interactive Data Visualization & Skill Radar
* Leverages **Chart.js** to transform static technical resumes into dynamic, interactive data visualizations and competence analytics.

---

## 👨‍💻 Developer Role & Responsibilities

**Role:** **Lead Full-Stack Developer & Mobile Solutions Architect**  
**Author:** **Nheb Panha** ([GitHub](https://github.com/panhanheb) | [LinkedIn](https://linkedin.com/in/nhebpanha))

As the sole architect and lead developer of this project, responsibilities encompassed the entire Software Development Lifecycle (SDLC):

| Domain | Key Responsibilities |
| :--- | :--- |
| **System Architecture** | Designed end-to-end client-server architecture using Nuxt 4 Nitro serverless routes, Supabase PostgreSQL, and Google Gemini AI services. |
| **Frontend Engineering** | Implemented responsive, mobile-first UI components in Vue 3 (Composition API, `<script setup>`), Tailwind CSS, dynamic dark/light themes, and CSS keyframe animations. |
| **Backend & API Design** | Developed secure server endpoints (`/api/chat`, `/api/contact`), payload validation, CORS handling, and fallback resilience patterns. |
| **Database & Security** | Designed PostgreSQL schema with Supabase, implemented Row Level Security (RLS) policies, and configured secure client/service role authentication. |
| **AI Integration** | Formatted system prompts, handled conversational history chaining, and integrated multi-model failover for Gemini Flash models. |
| **DevOps & Integration** | Integrated Telegram Bot API for instant push notifications, configured environment secrets (`.env`), and deployed production builds on Vercel. |

---

## 🏛️ System Architecture & Component Roles

```
[ User Browser / Client ]
          │
          ├──> 1. Nuxt 4 / Vue 3 Interactive UI (Tailwind CSS, Icons, Chart.js)
          │
          └──> 2. Nitro Serverless API Layer
                     │
                     ├───> 3. /api/chat.post.ts ───> Google Gemini AI Engine
                     │                                   │
                     │                                   └──> Supabase (Chat Logs Audit)
                     │
                     └───> 4. /api/contact.post.ts
                                 │
                                 ├───> Telegram Bot API (Instant Push Alert)
                                 │
                                 └───> Supabase PostgreSQL (Lead Storage + RLS)
```

Each component inside this repository fulfills a dedicated role:

1. **Client / UI Layer (`app/components/`)**:
   - `HeroSection.vue`: Interactive introductory showcase with particle animation and live availability badges.
   - `About.vue`: Personal narrative, financial-accounting analytical background, and core philosophy.
   - `Portfolio.vue`: Dynamic project grid with real-time Supabase database data binding and offline fallback state.
   - `Skills.vue` & `TechStack.vue`: Categorized technical competencies and framework proficiencies.
   - `ChartAI.vue`: Interactive Chart.js analytics engine reflecting engineering skills.
   - `WorkTimeline.vue`: Chronological career progression, enterprise experience, and milestones.
   - `ExperienceContact.vue`: Interactive lead submission form with instant status indicators.
   - `FloatingChat.vue`: Floating conversational AI widget with typing indicator and streaming message flow.

2. **Serverless API Layer (`server/api/`)**:
   - `chat.post.ts`: Orchestrates conversational queries with Google Gemini, applies custom persona guidelines, manages conversation history, and logs chats to Supabase.
   - `contact.post.ts`: Validates contact form submissions, writes records to Supabase, and dispatches formatted Telegram notifications.

3. **Cloud & Database Layer (`Supabase`)**:
   - Stores dynamic projects, form inquiries (`contact_submissions`), and AI prompt logs (`chat_logs`).
   - Protects sensitive operations via Row Level Security (RLS).

---

## ✨ Key Features & Modules

- ⚡ **Nuxt 4 Powered**: Ultra-fast client-side hydration, optimized asset pipelines, and SSR/SSG readiness.
- 🤖 **Gemini AI Chatbot**: In-app intelligent assistant with domain context about Panha's work experience and skills.
- 📱 **Telegram Bot Webhook Alerts**: Real-time push notifications sent directly to the developer's smartphone upon message delivery.
- 📊 **Dynamic Data Visualizations**: Skill radar and experience metrics built with Chart.js.
- 🌙 **Adaptive Dark Mode**: Seamless dark and light theme switching with Tailwind CSS color token system.
- 🛡️ **Fail-Safe Architecture**: Graceful fallback data handling ensures the site remains 100% operational even during external service outages.
- 📱 **Fully Responsive**: Flawless UX across desktop, tablet, and mobile viewports.

---

## 🛠️ Tech Stack & Technologies

### Frontend
- **Framework**: [Nuxt 4](https://nuxt.com/) / [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with `@tailwindcss/forms` and `@tailwindcss/container-queries`
- **Icons**: `@nuxt/icon` (Iconify integration)
- **Charts**: [Chart.js](https://www.chartjs.org/)

### Backend & Cloud Services
- **Runtime / Server**: Nuxt Nitro Engine (Serverless API handlers)
- **Database**: [Supabase](https://supabase.com/) (PostgreSQL with RLS)
- **AI / LLM**: [Google Gemini AI](https://ai.google.dev/) (`@google/generative-ai` & `@google/genai`)
- **Messaging Service**: Telegram Bot API

---

## 🗄️ Database Schema & Services

The database is built on **Supabase PostgreSQL** (`supabase_schema.sql`).

```sql
-- 1. Projects Showcase
CREATE TABLE public.projects (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    description TEXT NOT NULL,
    icon TEXT DEFAULT 'logos:flutter',
    link TEXT DEFAULT '#',
    github_url TEXT DEFAULT '#',
    featured BOOLEAN DEFAULT true,
    tags JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Contact Inquiries & Leads
CREATE TABLE public.contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    type TEXT DEFAULT 'General Inquiry',
    status TEXT DEFAULT 'unread',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. AI Chat Conversation Audit
CREATE TABLE public.chat_logs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_prompt TEXT NOT NULL,
    bot_response TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);
```

---

## 🚀 Getting Started & Setup

### Prerequisites
- **Node.js**: v20.x or v22.x+
- **Package Manager**: `npm`, `pnpm`, or `bun`

### 1. Clone the Repository
```bash
git clone https://github.com/panhanheb/Panha_NHEB.git
cd portfolio_nheb_panha
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the project root:
```env
# Google Gemini AI Key
NUXT_GEMINI_API_KEY=your_gemini_api_key

# Telegram Notifications
NUXT_TELEGRAM_BOT_TOKEN=your_bot_token
NUXT_TELEGRAM_CHAT_ID=your_chat_id

# Supabase Credentials
NUXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NUXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### 4. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

### 5. Build for Production
```bash
npm run build
# Or generate static output
npm run generate
```

---

## 📂 Directory Structure

```plaintext
portfolio_nheb_panha/
├── app/
│   ├── assets/              # Global styles, fonts, and CSS animations
│   ├── components/          # Reusable Vue components (Hero, About, Chat, etc.)
│   ├── composables/         # Reusable Nuxt state logic and utilities
│   ├── layouts/             # Default page layouts
│   ├── pages/               # Routing views (index.vue)
│   └── app.vue              # Main application entry point
├── public/                  # Static assets, favicon, project logos, demo gif
├── server/
│   └── api/
│       ├── chat.post.ts     # Gemini AI API handler with multi-model fallback
│       └── contact.post.ts  # Contact submission handler with Telegram + Supabase
├── nuxt.config.ts           # Nuxt configuration, modules, runtimeConfig
├── supabase_schema.sql      # Supabase SQL initialization and schema
├── package.json             # Dependencies and project scripts
└── README.md                # Comprehensive project documentation
```

---

## 📬 Contact & Connect

- 👨‍💻 **Developer:** NHEB Panha
- 📧 **Email:** [samlot.development@gmail.com](mailto:samlot.development@gmail.com) / [nhebpanha78@gmail.com](mailto:nhebpanha78@gmail.com)
- 💼 **LinkedIn:** [linkedin.com/in/nhebpanha](https://linkedin.com/in/nhebpanha)
- 🌐 **Live Portfolio:** [nheb-panha.vercel.app](https://nheb-panha.vercel.app/)
- 📍 **Location:** Phnom Penh, Cambodia (UTC+7)
