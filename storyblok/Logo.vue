<script setup lang="ts">
defineProps<{
  blok: {
    text: string
  }
}>()
</script>

<template>
  <div class="logo" v-editable="blok">
    <span class="logo__text">{{ blok.text }}</span>
  </div>
</template>
