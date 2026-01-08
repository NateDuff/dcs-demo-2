<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  alert('Thank you for your message! We\'ll get back to you soon.')
  form.value = { name: '', email: '', message: '' }
}
</script>

<template>
  <!-- Hero -->
  <section class="bg-gradient-to-b from-bakery-100 to-cream py-16">
    <div class="container mx-auto px-6 text-center">
      <h1 class="text-4xl md:text-5xl font-display font-bold text-bakery-900 mb-4">
        Visit Us
      </h1>
      <p class="text-xl text-bakery-700 max-w-2xl mx-auto">
        We'd love to see you!
      </p>
    </div>
  </section>

  <!-- Contact Info -->
  <section class="py-16 bg-white">
    <div class="container mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
        <!-- Info Cards -->
        <div class="space-y-8">
          <!-- Location -->
          <div class="bg-bakery-50 rounded-2xl p-8">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-bakery-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-bakery-900 mb-2">Location</h3>
                <p class="text-bakery-700 font-medium">456 Maple Street</p>
                <p class="text-bakery-600">San Francisco, CA 94110</p>
                <p class="text-bakery-500 text-sm mt-2">Corner of Maple and Oak, look for the red awning</p>
              </div>
            </div>
          </div>

          <!-- Hours -->
          <div class="bg-bakery-50 rounded-2xl p-8">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-bakery-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-bakery-900 mb-2">Hours</h3>
                <div class="space-y-1">
                  <p class="text-bakery-700">Monday - Friday: <span class="font-medium">6am - 6pm</span></p>
                  <p class="text-bakery-700">Saturday: <span class="font-medium">7am - 5pm</span></p>
                  <p class="text-bakery-700">Sunday: <span class="font-medium">8am - 3pm</span></p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact -->
          <div class="bg-bakery-50 rounded-2xl p-8">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-bakery-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-bakery-900 mb-2">Get in Touch</h3>
                <p class="text-bakery-700">
                  <span class="font-medium">Phone:</span> (415) 555-0123
                </p>
                <p class="text-bakery-700">
                  <span class="font-medium">Email:</span> hello@maplestreetbakery.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div>
          <h2 class="text-2xl font-display font-bold text-bakery-900 mb-6">Send us a message</h2>
          <form class="space-y-6" @submit.prevent="handleSubmit">
            <div>
              <label for="name" class="block text-sm font-medium text-bakery-700 mb-2">Your Name</label>
              <input 
                id="name"
                v-model="form.name"
                type="text" 
                required
                class="w-full px-4 py-3 border border-bakery-200 rounded-xl focus:ring-2 focus:ring-bakery-500 focus:border-transparent transition bg-white"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-bakery-700 mb-2">Email</label>
              <input 
                id="email"
                v-model="form.email"
                type="email" 
                required
                class="w-full px-4 py-3 border border-bakery-200 rounded-xl focus:ring-2 focus:ring-bakery-500 focus:border-transparent transition bg-white"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-bakery-700 mb-2">Message</label>
              <textarea 
                id="message"
                v-model="form.message"
                rows="5" 
                required
                class="w-full px-4 py-3 border border-bakery-200 rounded-xl focus:ring-2 focus:ring-bakery-500 focus:border-transparent transition resize-none bg-white"
                placeholder="Tell us about your catering needs, feedback, or questions..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              class="w-full bg-bakery-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-bakery-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Map Placeholder -->
  <section class="h-80 bg-bakery-100 flex items-center justify-center">
    <div class="text-center">
      <div class="text-6xl mb-4">📍</div>
      <p class="text-bakery-600">Interactive map coming soon</p>
    </div>
  </section>

  <!-- Catering CTA -->
  <section class="py-16 bg-bakery-800 text-white">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-3xl font-display font-bold mb-4">Catering & Special Orders</h2>
      <p class="text-bakery-200 max-w-2xl mx-auto mb-6">
        Planning an event? We offer catering for meetings, parties, and special occasions. 
        Custom cakes and large orders require 48-hour notice.
      </p>
      <a 
        href="tel:4155550123" 
        class="inline-block bg-white text-bakery-800 px-8 py-3 rounded-full font-semibold hover:bg-bakery-100 transition"
      >
        Call Us: (415) 555-0123
      </a>
    </div>
  </section>
</template>
