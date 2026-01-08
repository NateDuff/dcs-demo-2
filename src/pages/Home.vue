<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useTextContent, useSEO } from '@duffcloudservices/cms'

const { t } = useTextContent({
  pageSlug: 'home',
  defaults: {
    'hero.title': 'Fresh-Baked Goodness Every Day',
    'hero.subtitle': 'Artisan bread, pastries, and treats made with love since 1987.',
    'hero.cta': 'Order Now',
    'featured.title': "Today's Fresh Picks",
    'featured.item1.name': 'Sourdough Loaf',
    'featured.item1.description': 'Our signature tangy sourdough, crusty outside, soft inside.',
    'featured.item1.price': '$7.50',
    'featured.item2.name': 'Maple Walnut Croissant',
    'featured.item2.description': 'Flaky layers of butter and our special maple glaze.',
    'featured.item2.price': '$4.95',
    'featured.item3.name': 'Cinnamon Roll',
    'featured.item3.description': 'Warm, gooey, and topped with cream cheese frosting.',
    'featured.item3.price': '$4.50',
    'hours.title': 'Visit Us',
    'hours.weekdays': 'Mon-Fri: 6am - 6pm',
    'hours.saturday': 'Saturday: 7am - 5pm',
    'hours.sunday': 'Sunday: 8am - 3pm',
    'testimonial.quote': "The best croissants outside of Paris. I've been coming here every Saturday for 10 years!",
    'testimonial.author': 'Maria L., Regular Customer',
  },
})

const { applyHead } = useSEO('home')
applyHead()

const featuredItems = [
  {
    name: t('featured.item1.name'),
    description: t('featured.item1.description'),
    price: t('featured.item1.price'),
    emoji: '🍞'
  },
  {
    name: t('featured.item2.name'),
    description: t('featured.item2.description'),
    price: t('featured.item2.price'),
    emoji: '🥐'
  },
  {
    name: t('featured.item3.name'),
    description: t('featured.item3.description'),
    price: t('featured.item3.price'),
    emoji: '🍥'
  }
]
</script>

<template>
  <!-- Hero Section -->
  <section class="relative bg-gradient-to-b from-bakery-100 to-cream py-20 md:py-32">
    <div class="container mx-auto px-6">
      <div class="max-w-3xl">
        <h1 class="text-4xl md:text-6xl font-display font-bold text-bakery-900 mb-6 leading-tight">
          {{ t('hero.title') }}
        </h1>
        <p class="text-xl text-bakery-700 mb-8">
          {{ t('hero.subtitle') }}
        </p>
        <div class="flex flex-wrap gap-4">
          <a href="#order" class="bg-bakery-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-bakery-700 transition text-lg">
            {{ t('hero.cta') }}
          </a>
          <RouterLink to="/menu" class="border-2 border-bakery-600 text-bakery-600 px-8 py-3 rounded-full font-semibold hover:bg-bakery-600 hover:text-white transition text-lg">
            View Menu
          </RouterLink>
        </div>
      </div>
    </div>
    <!-- Decorative bread illustration -->
    <div class="absolute right-0 bottom-0 opacity-10 text-[200px] leading-none hidden lg:block">
      🥖
    </div>
  </section>

  <!-- Featured Items -->
  <section class="py-16 bg-white">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-display font-bold text-bakery-900 text-center mb-12">
        {{ t('featured.title') }}
      </h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div 
          v-for="item in featuredItems" 
          :key="item.name"
          class="bg-bakery-50 rounded-2xl p-6 text-center hover:shadow-lg transition"
        >
          <div class="text-6xl mb-4">{{ item.emoji }}</div>
          <h3 class="text-xl font-semibold text-bakery-900 mb-2">{{ item.name }}</h3>
          <p class="text-bakery-600 mb-4">{{ item.description }}</p>
          <span class="text-2xl font-bold text-bakery-700">{{ item.price }}</span>
        </div>
      </div>
      <div class="text-center mt-10">
        <RouterLink 
          to="/menu" 
          class="inline-flex items-center gap-2 text-bakery-600 font-semibold hover:text-bakery-700 transition"
        >
          See full menu
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </RouterLink>
      </div>
    </div>
  </section>

  <!-- Hours & Location -->
  <section class="py-16 bg-bakery-800 text-white">
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-display font-bold mb-6">{{ t('hours.title') }}</h2>
          <div class="space-y-4">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-bakery-700 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p class="font-semibold">{{ t('hours.weekdays') }}</p>
                <p class="text-bakery-200">{{ t('hours.saturday') }}</p>
                <p class="text-bakery-200">{{ t('hours.sunday') }}</p>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-bakery-700 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p class="font-semibold">456 Maple Street</p>
                <p class="text-bakery-200">San Francisco, CA 94110</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-bakery-700 rounded-2xl p-8">
          <blockquote class="text-xl italic mb-4">
            "{{ t('testimonial.quote') }}"
          </blockquote>
          <p class="text-bakery-200">— {{ t('testimonial.author') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
