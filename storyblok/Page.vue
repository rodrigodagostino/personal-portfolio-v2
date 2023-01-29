<script setup lang="ts">
defineProps<{
  blok: {
    header: object
    body: object
    footer: object
  }
}>()
</script>

<template>
  <div class="page" v-editable="blok">
    <header id="page-header" class="page__header">
      <StoryblokComponent
        v-for="blok in blok.header"
        :key="blok._uid"
        :blok="blok"
      />
    </header>
    <main id="page-main" class="page__main">
      <StoryblokComponent
        v-for="blok in blok.body"
        :key="blok._uid"
        :blok="blok"
      />
    </main>
    <footer id="page-footer" class="page__footer">
      <StoryblokComponent
        v-for="blok in blok.footer"
        :key="blok._uid"
        :blok="blok"
      />
    </footer>
  </div>
</template>
