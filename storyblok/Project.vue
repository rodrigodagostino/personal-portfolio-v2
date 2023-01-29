<script setup lang="ts">
import Richtext from 'storyblok-js-client'

const props = defineProps<{
  blok: {
    id: string
    title: string
    description: Richtext
    tags: string
    links: object
    image: {
      id: number
      alt: string
      name: string
      focus: string
      title: string
      filename: string
      copyright: string
      is_external_url: boolean
    }
  }
}>()

const description = computed(() => renderRichText(props.blok.description))
</script>

<template>
  <div class="project" v-editable="blok" :id="blok.id">
    <img
      class="project__image"
      :src="blok.image.filename"
      :alt="blok.image.alt"
    />
    <h3 class="project__title">{{ blok.title }}</h3>
    <div class="project__description" v-html="description" />
    <ul class="project__tags">
      <li class="project__tag" v-for="tag in blok.tags">{{ tag }}</li>
    </ul>
    <StoryblokComponent
      v-for="blok in blok.links"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>
