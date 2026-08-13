<script setup lang="ts">
import { useTextContent, useSEO } from '@duffcloudservices/cms'

const { t } = useTextContent({
  pageSlug: 'about',
  defaults: {
    'hero.title': 'Our Story',
    'hero.subtitle': 'A neighborhood bakery with roots in tradition.',
    'story.title': 'Three Generations of Baking',
    'story.paragraph1': 'Maple Street Bakery was founded in 1987 by Anna and Marcus Chen, who brought their family recipes from their hometown in Europe. What started as a tiny storefront has grown into a beloved neighborhood institution.',
    'story.paragraph2': 'Today, their granddaughter Sarah continues the tradition, using the same recipes, the same techniques, and the same commitment to quality that made Maple Street famous.',
    'story.paragraph3': 'We still start baking at 3am every day to ensure everything is fresh when we open. No shortcuts, no preservatives — just real ingredients and real craft.',
    'values.title': 'What We Believe',
    'values.fresh.title': 'Fresh Daily',
    'values.fresh.description': 'Everything is baked from scratch each morning',
    'values.local.title': 'Local First',
    'values.local.description': 'We source ingredients from local farms when possible',
    'values.community.title': 'Community',
    'values.community.description': "More than a bakery, we're a neighborhood gathering place",
    'team.title': 'Meet the Team',
    'team.sarah.name': 'Sarah Chen',
    'team.sarah.role': 'Head Baker & Owner',
    'team.sarah.bio': 'Third-generation baker, carrying on her grandparents\' legacy.',
    'team.marco.name': 'Marco Rodriguez',
    'team.marco.role': 'Pastry Chef',
    'team.marco.bio': 'Trained in Paris, brings European flair to our pastries.',
    'team.lisa.name': 'Lisa Park',
    'team.lisa.role': 'Front of House Manager',
    'team.lisa.bio': 'The friendly face that greets you every morning.',
  },
})

const { applyHead } = useSEO('about')
applyHead()

const values = [
  { key: 'fresh', emoji: '🌅' },
  { key: 'local', emoji: '🌾' },
  { key: 'community', emoji: '🏘️' },
]

const team = [
  { key: 'sarah' },
  { key: 'marco' },
  { key: 'lisa' },
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

    <!-- Story Section -->
    <section 
      data-section="story" 
      data-section-label="Our Story"
      class="py-16 bg-white"
    >
      <div class="container mx-auto px-6">
        <div class="max-w-3xl mx-auto">
          <h2 
            data-text-key="story.title"
            class="text-3xl font-display font-bold text-bakery-900 mb-8"
          >
            {{ t('story.title') }}
          </h2>
          <div class="prose prose-lg text-bakery-700 space-y-6">
            <p data-text-key="story.paragraph1">{{ t('story.paragraph1') }}</p>
            <p data-text-key="story.paragraph2">{{ t('story.paragraph2') }}</p>
            <p data-text-key="story.paragraph3">{{ t('story.paragraph3') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section 
      data-section="values" 
      data-section-label="Our Values"
      class="py-16 bg-bakery-50"
    >
      <div class="container mx-auto px-6">
        <h2 
          data-text-key="values.title"
          class="text-3xl font-display font-bold text-bakery-900 text-center mb-12"
        >
          {{ t('values.title') }}
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div 
            v-for="value in values" 
            :key="value.key"
            class="bg-white rounded-2xl p-8 text-center shadow-sm"
          >
            <div class="text-5xl mb-4">{{ value.emoji }}</div>
            <h3 
              :data-text-key="`values.${value.key}.title`"
              class="text-xl font-semibold text-bakery-900 mb-2"
            >{{ t(`values.${value.key}.title`) }}</h3>
            <p 
              :data-text-key="`values.${value.key}.description`"
              class="text-bakery-600"
            >{{ t(`values.${value.key}.description`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section 
      data-section="team" 
      data-section-label="Our Team"
      class="py-16 bg-white"
    >
      <div class="container mx-auto px-6">
        <h2 
          data-text-key="team.title"
          class="text-3xl font-display font-bold text-bakery-900 text-center mb-12"
        >
          {{ t('team.title') }}
        </h2>
        <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div 
            v-for="member in team" 
            :key="member.key"
            class="text-center"
          >
            <div class="w-32 h-32 bg-bakery-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span class="text-5xl">👩‍🍳</span>
            </div>
            <h3 
              :data-text-key="`team.${member.key}.name`"
              class="text-lg font-semibold text-bakery-900"
            >{{ t(`team.${member.key}.name`) }}</h3>
            <p 
              :data-text-key="`team.${member.key}.role`"
              class="text-bakery-600 font-medium"
            >{{ t(`team.${member.key}.role`) }}</p>
            <p 
              :data-text-key="`team.${member.key}.bio`"
              class="text-bakery-500 text-sm mt-2"
            >{{ t(`team.${member.key}.bio`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section 
      data-section="timeline" 
      data-section-label="Our Journey"
      class="py-16 bg-bakery-800 text-white"
    >
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
  </div>
</template>
