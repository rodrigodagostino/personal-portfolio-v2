<script setup lang="ts">
defineProps<{
  blok: {
    title: string
    skills: object
  }
}>()
</script>

<template>
  <div class="skills" v-editable="blok">
    <h3>{{ blok.title }}</h3>
    <StoryblokComponent
      v-for="blok in blok.skills"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>
