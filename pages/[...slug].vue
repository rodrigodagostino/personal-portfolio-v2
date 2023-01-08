<script setup lang="ts">
const { slug } = useRoute().params

const story = await useAsyncStoryblok(
  slug && Array.isArray(slug) ? slug.join('/') : 'home',
  { version: 'draft' }
)
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
