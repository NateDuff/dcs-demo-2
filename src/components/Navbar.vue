<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)
</script>

<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <nav class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <RouterLink to="/" class="flex items-center gap-2">
          <div class="w-10 h-10 bg-bakery-600 rounded-full flex items-center justify-center">
            <span class="text-white text-xl">🥐</span>
          </div>
          <span class="text-xl font-display font-semibold text-bakery-800">Maple Street Bakery</span>
        </RouterLink>
        
        <div class="hidden md:flex items-center gap-8">
          <RouterLink to="/" class="text-bakery-700 hover:text-bakery-600 transition font-medium">Home</RouterLink>
          <RouterLink to="/menu" class="text-bakery-700 hover:text-bakery-600 transition font-medium">Menu</RouterLink>
          <RouterLink to="/about" class="text-bakery-700 hover:text-bakery-600 transition font-medium">About</RouterLink>
          <RouterLink to="/contact" class="text-bakery-700 hover:text-bakery-600 transition font-medium">Visit Us</RouterLink>
          <a href="#order" class="bg-bakery-600 text-white px-5 py-2 rounded-full hover:bg-bakery-700 transition font-medium">
            Order Online
          </a>
        </div>

        <button 
          class="md:hidden text-bakery-700"
          @click="isMenuOpen = !isMenuOpen"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile menu -->
      <div v-if="isMenuOpen" class="md:hidden pt-4 pb-2 border-t border-bakery-100 mt-4">
        <div class="flex flex-col gap-4">
          <RouterLink to="/" class="text-bakery-700 hover:text-bakery-600 transition font-medium" @click="isMenuOpen = false">Home</RouterLink>
          <RouterLink to="/menu" class="text-bakery-700 hover:text-bakery-600 transition font-medium" @click="isMenuOpen = false">Menu</RouterLink>
          <RouterLink to="/about" class="text-bakery-700 hover:text-bakery-600 transition font-medium" @click="isMenuOpen = false">About</RouterLink>
          <RouterLink to="/contact" class="text-bakery-700 hover:text-bakery-600 transition font-medium" @click="isMenuOpen = false">Visit Us</RouterLink>
          <a href="#order" class="bg-bakery-600 text-white px-5 py-2 rounded-full hover:bg-bakery-700 transition font-medium text-center">
            Order Online
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>
