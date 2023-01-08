<script setup lang="ts">
defineProps<{ blok: { headline: String } }>()
</script>

<template>
  <div v-editable="blok">
    {{ blok.headline }}
  </div>
</template>
