<script setup lang="ts">
import { useTextContent, useSEO } from '@duffcloudservices/cms'

const { t } = useTextContent({
  pageSlug: 'menu',
  defaults: {
    'hero.title': 'Our Menu',
    'hero.subtitle': "Everything baked fresh daily. Here when it's gone, it's gone!",
    'breads.title': 'Artisan Breads',
    'pastries.title': 'Pastries',
    'sweets.title': 'Sweet Treats',
    'drinks.title': 'Drinks',
    'catering.title': 'Catering & Special Orders',
    'catering.description': 'Planning an event? We offer catering for meetings, parties, and special occasions. Custom cakes and large orders require 48-hour notice.',
    'catering.cta': 'Contact Us for Orders',
  },
})

const { applyHead } = useSEO('menu')
applyHead()

interface MenuItem {
  name: string
  description: string
  price: string
}

interface MenuCategory {
  key: string
  emoji: string
  items: MenuItem[]
}

const menuCategories: MenuCategory[] = [
  {
    key: 'breads',
    emoji: '🍞',
    items: [
      { name: 'Classic Sourdough', description: '36-hour fermented, crusty perfection', price: '$7.50' },
      { name: 'French Baguette', description: 'Traditional, crispy crust', price: '$4.50' },
      { name: 'Dark Rye', description: 'Caraway seeds, old-world recipe', price: '$8.00' },
      { name: 'Seven Grain', description: 'Hearty and nutritious', price: '$8.50' },
      { name: 'Olive Focaccia', description: 'Rosemary, kalamata olives', price: '$9.00' },
      { name: 'Ciabatta', description: 'Italian style, airy crumb', price: '$5.50' },
    ]
  },
  {
    key: 'pastries',
    emoji: '🥐',
    items: [
      { name: 'Butter Croissant', description: '27 layers of pure butter', price: '$3.95' },
      { name: 'Almond Croissant', description: 'Filled with almond cream', price: '$4.95' },
      { name: 'Maple Walnut Croissant', description: 'Our signature maple glaze', price: '$4.95' },
      { name: 'Pain au Chocolat', description: 'Dark chocolate batons', price: '$4.50' },
      { name: 'Fruit Danish', description: 'Seasonal fruit, cream cheese', price: '$4.25' },
      { name: 'Ham & Cheese Croissant', description: 'Savory breakfast favorite', price: '$5.50' },
    ]
  },
  {
    key: 'sweets',
    emoji: '🍰',
    items: [
      { name: 'Cinnamon Roll', description: 'Cream cheese frosting', price: '$4.50' },
      { name: 'Fudge Brownie', description: 'Dense, chocolatey', price: '$3.50' },
      { name: 'Chocolate Chip Cookie', description: 'Chewy center, crisp edges', price: '$2.50' },
      { name: 'Lemon Bar', description: 'Tangy, shortbread crust', price: '$3.25' },
      { name: 'Apple Turnover', description: 'Cinnamon spiced, flaky', price: '$4.00' },
      { name: 'Banana Bread Slice', description: 'Moist, walnut studded', price: '$3.50' },
    ]
  },
  {
    key: 'drinks',
    emoji: '☕',
    items: [
      { name: 'Drip Coffee', description: 'Local roast, freshly brewed', price: '$2.50' },
      { name: 'Café Latte', description: 'Double shot, steamed milk', price: '$4.50' },
      { name: 'Cappuccino', description: 'Traditional Italian style', price: '$4.00' },
      { name: 'Hot Tea', description: 'Selection of loose leaf', price: '$3.00' },
      { name: 'Hot Chocolate', description: 'Belgian chocolate, whipped cream', price: '$4.00' },
      { name: 'Fresh Orange Juice', description: 'Squeezed to order', price: '$4.50' },
    ]
  }
]
</script>

<template>
  <div class="page-root">
    <!-- Hero -->
    <section 
      data-section="hero" 
      data-section-label="Hero Banner"
      class="bg-gradient-to-b from-bakery-100 to-cream py-16"
    >
      <div class="container mx-auto px-6 text-center">
        <h1 
          data-text-key="hero.title"
          class="text-4xl md:text-5xl font-display font-bold text-bakery-900 mb-4"
        >
          {{ t('hero.title') }}
        </h1>
        <p 
          data-text-key="hero.subtitle"
          class="text-xl text-bakery-700 max-w-2xl mx-auto"
        >
          {{ t('hero.subtitle') }}
        </p>
      </div>
    </section>

    <!-- Menu Categories -->
    <section 
      data-section="menu-categories" 
      data-section-label="Menu Items"
      data-dynamic
      class="py-12"
    >
      <div class="container mx-auto px-6">
        <div class="space-y-16">
          <div v-for="category in menuCategories" :key="category.key">
            <div class="flex items-center gap-3 mb-8">
              <span class="text-4xl">{{ category.emoji }}</span>
              <h2 
                :data-text-key="`${category.key}.title`"
                class="text-3xl font-display font-bold text-bakery-900"
              >{{ t(`${category.key}.title`) }}</h2>
            </div>
          
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div 
                v-for="item in category.items" 
                :key="item.name"
                class="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div class="flex justify-between items-start mb-2">
                  <h3 class="text-lg font-semibold text-bakery-900">{{ item.name }}</h3>
                  <span class="text-lg font-bold text-bakery-600">{{ item.price }}</span>
                </div>
                <p class="text-bakery-600 text-sm">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Special Orders Banner -->
    <section 
      data-section="catering" 
      data-section-label="Catering & Special Orders"
      class="py-12 bg-bakery-100"
    >
      <div class="container mx-auto px-6">
        <div class="bg-white rounded-2xl p-8 md:p-12 text-center shadow-sm">
          <h2 
            data-text-key="catering.title"
            class="text-2xl md:text-3xl font-display font-bold text-bakery-900 mb-4"
          >
            {{ t('catering.title') }}
          </h2>
          <p 
            data-text-key="catering.description"
            class="text-bakery-700 max-w-2xl mx-auto mb-6"
          >
            {{ t('catering.description') }}
          </p>
          <a 
            href="/contact" 
            data-text-key="catering.cta"
            class="inline-block bg-bakery-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-bakery-700 transition"
          >
            {{ t('catering.cta') }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
