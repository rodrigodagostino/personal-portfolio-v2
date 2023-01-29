<script setup lang="ts">
import { ITechIcon } from '@/components/TechIcon.vue'

defineProps<{
  blok: {
    label: string
    icon: ITechIcon
  }
}>()
</script>

<template>
  <div class="skill" v-editable="blok">
    <TechIcon :icon="blok.icon" />
    <span>{{ blok.label }}</span>
  </div>
</template>
