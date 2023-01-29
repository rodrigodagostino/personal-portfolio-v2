<script setup lang="ts">
defineProps<{
  blok: {
    items: object
  }
}>()
</script>

<template>
  <div class="menu" v-editable="blok">
    <StoryblokComponent
      v-for="blok in blok.items"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>
