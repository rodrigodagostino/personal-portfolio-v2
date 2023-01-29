<script setup lang="ts">
import Richtext from 'storyblok-js-client'

const props = defineProps<{
  blok: {
    id: string
    eyebrow: string
    titleLineOne: string
    titleLineTwo: string
    subhead: Richtext
  }
}>()

const subhead = computed(() => renderRichText(props.blok.subhead))
</script>

<template>
  <section class="hero" v-editable="blok" :id="blok.id">
    <p class="hero__eyebrow">{{ blok.eyebrow }}</p>
    <h2 class="hero__title">
      {{ blok.titleLineOne }}
      <em>{{ blok.titleLineTwo }}</em>
    </h2>
    <div class="hero__subhead" v-html="subhead" />
  </section>
</template>
