<script setup lang="ts">
const values = [
  {
    title: 'Fresh Daily',
    description: 'Everything is baked from scratch each morning',
    emoji: '🌅'
  },
  {
    title: 'Local First',
    description: 'We source ingredients from local farms when possible',
    emoji: '🌾'
  },
  {
    title: 'Community',
    description: "More than a bakery, we're a neighborhood gathering place",
    emoji: '🏘️'
  }
]

const team = [
  {
    name: 'Sarah Chen',
    role: 'Head Baker & Owner',
    bio: 'Third-generation baker, carrying on her grandparents\' legacy.'
  },
  {
    name: 'Marco Rodriguez',
    role: 'Pastry Chef',
    bio: 'Trained in Paris, brings European flair to our pastries.'
  },
  {
    name: 'Lisa Park',
    role: 'Front of House Manager',
    bio: 'The friendly face that greets you every morning.'
  }
]
</script>

<template>
  <!-- Hero -->
  <section class="bg-gradient-to-b from-bakery-100 to-cream py-16">
    <div class="container mx-auto px-6 text-center">
      <h1 class="text-4xl md:text-5xl font-display font-bold text-bakery-900 mb-4">
        Our Story
      </h1>
      <p class="text-xl text-bakery-700 max-w-2xl mx-auto">
        A neighborhood bakery with roots in tradition.
      </p>
    </div>
  </section>

  <!-- Story Section -->
  <section class="py-16 bg-white">
    <div class="container mx-auto px-6">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-display font-bold text-bakery-900 mb-8">
          Three Generations of Baking
        </h2>
        <div class="prose prose-lg text-bakery-700 space-y-6">
          <p>
            Maple Street Bakery was founded in 1987 by Anna and Marcus Chen, who brought their 
            family recipes from their hometown in Europe. What started as a tiny storefront has 
            grown into a beloved neighborhood institution.
          </p>
          <p>
            Today, their granddaughter Sarah continues the tradition, using the same recipes, 
            the same techniques, and the same commitment to quality that made Maple Street famous.
          </p>
          <p>
            We still start baking at 3am every day to ensure everything is fresh when we open. 
            No shortcuts, no preservatives — just real ingredients and real craft.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Values -->
  <section class="py-16 bg-bakery-50">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-display font-bold text-bakery-900 text-center mb-12">
        What We Believe
      </h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div 
          v-for="value in values" 
          :key="value.title"
          class="bg-white rounded-2xl p-8 text-center shadow-sm"
        >
          <div class="text-5xl mb-4">{{ value.emoji }}</div>
          <h3 class="text-xl font-semibold text-bakery-900 mb-2">{{ value.title }}</h3>
          <p class="text-bakery-600">{{ value.description }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Team -->
  <section class="py-16 bg-white">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-display font-bold text-bakery-900 text-center mb-12">
        Meet the Team
      </h2>
      <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div 
          v-for="member in team" 
          :key="member.name"
          class="text-center"
        >
          <div class="w-32 h-32 bg-bakery-200 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span class="text-5xl">👩‍🍳</span>
          </div>
          <h3 class="text-lg font-semibold text-bakery-900">{{ member.name }}</h3>
          <p class="text-bakery-600 font-medium">{{ member.role }}</p>
          <p class="text-bakery-500 text-sm mt-2">{{ member.bio }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Timeline -->
  <section class="py-16 bg-bakery-800 text-white">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-display font-bold text-center mb-12">
        Our Journey
      </h2>
      <div class="max-w-2xl mx-auto space-y-8">
        <div class="flex gap-4">
          <div class="text-bakery-400 font-bold w-20 flex-shrink-0">1987</div>
          <div>
            <h3 class="font-semibold">The Beginning</h3>
            <p class="text-bakery-200">Anna and Marcus Chen open Maple Street Bakery with just three recipes.</p>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="text-bakery-400 font-bold w-20 flex-shrink-0">1995</div>
          <div>
            <h3 class="font-semibold">Expansion</h3>
            <p class="text-bakery-200">We expand into the storefront next door, adding a small café area.</p>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="text-bakery-400 font-bold w-20 flex-shrink-0">2010</div>
          <div>
            <h3 class="font-semibold">Second Generation</h3>
            <p class="text-bakery-200">David Chen takes over as head baker, introducing new pastry offerings.</p>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="text-bakery-400 font-bold w-20 flex-shrink-0">2022</div>
          <div>
            <h3 class="font-semibold">Third Generation</h3>
            <p class="text-bakery-200">Sarah Chen becomes owner, honoring tradition while embracing the future.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
