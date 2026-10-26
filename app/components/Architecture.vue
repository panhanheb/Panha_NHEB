<template>
  <section id="architecture" class="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref="sectionRef">
    
    <div class="transition-all duration-700 ease-out"
         :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
      
      <!-- Section Header -->
      <div class="max-w-2xl mb-12 sm:mb-16">
        <span class="text-xs font-mono font-bold tracking-widest uppercase text-cyan-600 dark:text-cyan-400 block mb-2">
          Engineering Approach
        </span>
        <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          Architecture & Code Quality.
        </h2>
        <p class="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          How I design production-ready mobile and web applications: strict layer separation, predictable state transitions, and defensive error handling.
        </p>
      </div>

      <!-- Main Visual Diagram: Clean Architecture Flow -->
      <div class="mb-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h3 class="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
              <span class="material-symbols-outlined text-cyan-500">account_tree</span>
              <span>Flutter Clean Architecture Layered Model</span>
            </h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">Decoupled data flow from data source to user interface</p>
          </div>
          <span class="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 w-fit">
            Dependency Inversion Pattern
          </span>
        </div>

        <!-- 3 Architecture Layer Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <!-- Layer 1: Presentation -->
          <div class="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-cyan-500/30 space-y-3 relative">
            <div class="flex items-center justify-between">
              <span class="text-xs font-mono font-bold uppercase text-cyan-600 dark:text-cyan-400">Layer 1</span>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-500">UI & State</span>
            </div>
            <h4 class="font-bold text-sm text-slate-900 dark:text-white">Presentation Layer</h4>
            <ul class="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 font-mono">
              <li class="flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                <span>Flutter Widgets & Screens</span>
              </li>
              <li class="flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                <span>BLoC / Cubit Observers</span>
              </li>
              <li class="flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                <span>UI Event Handlers</span>
              </li>
            </ul>
            <p class="text-[11px] text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
              Renders state reactively without direct network or database logic.
            </p>
          </div>

          <!-- Layer 2: Domain -->
          <div class="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-indigo-500/30 space-y-3 relative">
            <div class="flex items-center justify-between">
              <span class="text-xs font-mono font-bold uppercase text-indigo-600 dark:text-indigo-400">Layer 2</span>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-500">Pure Business</span>
            </div>
            <h4 class="font-bold text-sm text-slate-900 dark:text-white">Domain Layer (Core)</h4>
            <ul class="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 font-mono">
              <li class="flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                <span>Pure Dart Entities</span>
              </li>
              <li class="flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                <span>UseCases / Interactors</span>
              </li>
              <li class="flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                <span>Repository Interfaces</span>
              </li>
            </ul>
            <p class="text-[11px] text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
              Zero third-party framework dependencies. 100% unit-testable.
            </p>
          </div>

          <!-- Layer 3: Data -->
          <div class="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-emerald-500/30 space-y-3 relative">
            <div class="flex items-center justify-between">
              <span class="text-xs font-mono font-bold uppercase text-emerald-600 dark:text-emerald-400">Layer 3</span>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500">Sources</span>
            </div>
            <h4 class="font-bold text-sm text-slate-900 dark:text-white">Data Layer</h4>
            <ul class="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 font-mono">
              <li class="flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Repository Implementations</span>
              </li>
              <li class="flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Supabase / Firebase Client</span>
              </li>
              <li class="flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>REST API Client & Local Caches</span>
              </li>
            </ul>
            <p class="text-[11px] text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
              Maps remote JSON payloads to domain entities safely with try/catch guards.
            </p>
          </div>

        </div>

      </div>

      <!-- 4 Core Engineering Practices Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div class="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
            <span class="material-symbols-outlined text-lg">sync_alt</span>
          </div>
          <h4 class="font-bold text-base text-slate-900 dark:text-white">Maintainable State Management</h4>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            I utilize the <strong>BLoC (Business Logic Component)</strong> and <strong>Cubit</strong> patterns in Flutter to maintain unidirectional data flow. Events trigger state changes predictably, eliminating UI race conditions, duplicate API requests, and memory leaks.
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div class="w-9 h-9 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
            <span class="material-symbols-outlined text-lg">security</span>
          </div>
          <h4 class="font-bold text-base text-slate-900 dark:text-white">Authentication & Database Security</h4>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            In cloud integrations with <strong>Supabase</strong> and <strong>Firebase</strong>, security is enforced directly at the database layer using <em>Row-Level Security (RLS)</em> policies. Sensitive tokens are never leaked to client bundles, and user sessions are securely stored.
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div class="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <span class="material-symbols-outlined text-lg">wifi_off</span>
          </div>
          <h4 class="font-bold text-base text-slate-900 dark:text-white">Resilient Error Handling & Offline UI</h4>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Production mobile apps must withstand intermittent network drops. I build defensive data fetching with custom Result types (Success / Failure), user-friendly empty states, retry policies, and local offline storage (Hive / SQLite).
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div class="w-9 h-9 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center">
            <span class="material-symbols-outlined text-lg">folder_special</span>
          </div>
          <h4 class="font-bold text-base text-slate-900 dark:text-white">Modular & Scalable Project Structure</h4>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Applications are structured by features (e.g., <code>features/auth</code>, <code>features/tracking</code>, <code>features/orders</code>) rather than technical type alone. This modularity allows features to be updated, refactored, or isolated without impacting the rest of the application.
          </p>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { useScrollAnimate } from '~/composables/useScrollAnimate'

const { sectionRef, isVisible } = useScrollAnimate(0.1)
</script>
