<script setup lang="ts">
import Richtext from 'storyblok-js-client'

const props = defineProps<{
  blok: {
    id: string
    content: Richtext
  }
}>()

const content = computed(() => renderRichText(props.blok.content))
</script>

<template>
  <div class="rich-text" v-editable="blok" :id="blok.id">
    <div class="hero__rich-text" v-html="content" />
  </div>
</template>
