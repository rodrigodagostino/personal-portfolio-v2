<script setup lang="ts">
defineProps<{
  blok: {
    id: string
    title: string
    content: object
  }
}>()
</script>

<template>
  <section class="section" v-editable="blok" :id="blok.id">
    <h2 class="section__title">{{ blok.title }}</h2>
    <StoryblokComponent
      v-for="blok in blok.content"
      :key="blok._uid"
      :blok="blok"
    />
  </section>
</template>
