<script setup lang="ts">
defineProps<{
  blok: {
    text: string
    url: {
      id: string
      url: string
      target: string
      linktype: string
      fieldtype: string
      cached_url: string
    }
  }
}>()
</script>

<template>
  <NuxtLink
    class="menu-item"
    v-editable="blok"
    :href="blok.url.cached_url"
    :target="!!blok.url.target ? blok.url.target : '_self'"
  >
    {{ blok.text }}
  </NuxtLink>
</template>
