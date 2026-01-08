<script setup lang="ts">
interface MenuItem {
  name: string
  description: string
  price: string
}

interface MenuCategory {
  title: string
  emoji: string
  items: MenuItem[]
}

const menuCategories: MenuCategory[] = [
  {
    title: 'Artisan Breads',
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
    title: 'Pastries',
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
    title: 'Sweet Treats',
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
    title: 'Drinks',
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
  <!-- Hero -->
  <section class="bg-gradient-to-b from-bakery-100 to-cream py-16">
    <div class="container mx-auto px-6 text-center">
      <h1 class="text-4xl md:text-5xl font-display font-bold text-bakery-900 mb-4">
        Our Menu
      </h1>
      <p class="text-xl text-bakery-700 max-w-2xl mx-auto">
        Everything baked fresh daily. Here when it's gone, it's gone!
      </p>
    </div>
  </section>

  <!-- Menu Categories -->
  <section class="py-12">
    <div class="container mx-auto px-6">
      <div class="space-y-16">
        <div v-for="category in menuCategories" :key="category.title">
          <div class="flex items-center gap-3 mb-8">
            <span class="text-4xl">{{ category.emoji }}</span>
            <h2 class="text-3xl font-display font-bold text-bakery-900">{{ category.title }}</h2>
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
  <section class="py-12 bg-bakery-100">
    <div class="container mx-auto px-6">
      <div class="bg-white rounded-2xl p-8 md:p-12 text-center shadow-sm">
        <h2 class="text-2xl md:text-3xl font-display font-bold text-bakery-900 mb-4">
          Catering & Special Orders
        </h2>
        <p class="text-bakery-700 max-w-2xl mx-auto mb-6">
          Planning an event? We offer catering for meetings, parties, and special occasions. 
          Custom cakes and large orders require 48-hour notice.
        </p>
        <a 
          href="/contact" 
          class="inline-block bg-bakery-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-bakery-700 transition"
        >
          Contact Us for Orders
        </a>
      </div>
    </div>
  </section>
</template>
