<script setup lang="ts">
defineProps<{ blok: { name: String } }>()
</script>

<template>
  <div v-editable="blok">
    <h3>
      {{ blok.name }}
    </h3>
  </div>
</template>
