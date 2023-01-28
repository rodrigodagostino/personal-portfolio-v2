<script setup lang="ts">
export type ITechIcon =
  | 'adobe'
  | 'affinity'
  | 'blender'
  | 'bootstrap'
  | 'css'
  | 'figma'
  | 'git'
  | 'github'
  | 'html'
  | 'javascript'
  | 'linode'
  | 'netlify'
  | 'next'
  | 'npm'
  | 'nuxt'
  | 'php'
  | 'react'
  | 'sass'
  | 'tailwindcss'
  | 'vue'
  | 'webpack'
  | 'wordpress'

const TechIconAdobe = resolveComponent('TechIconAdobe')
const TechIconAffinity = resolveComponent('TechIconAffinity')
const TechIconBlender = resolveComponent('TechIconBlender')
const TechIconBootstrap = resolveComponent('TechIconBootstrap')
const TechIconCSS = resolveComponent('TechIconCSS')
const TechIconFigma = resolveComponent('TechIconFigma')
const TechIconGit = resolveComponent('TechIconGit')
const TechIconGitHub = resolveComponent('TechIconGitHub')
const TechIconHTML = resolveComponent('TechIconHTML')
const TechIconJavaScript = resolveComponent('TechIconJavaScript')
const TechIconLinode = resolveComponent('TechIconLinode')
const TechIconNetlify = resolveComponent('TechIconNetlify')
const TechIconNext = resolveComponent('TechIconNext')
const TechIconNPM = resolveComponent('TechIconNPM')
const TechIconNuxt = resolveComponent('TechIconNuxt')
const TechIconPHP = resolveComponent('TechIconPHP')
const TechIconReact = resolveComponent('TechIconReact')
const TechIconSass = resolveComponent('TechIconSass')
const TechIconTailwindCSS = resolveComponent('TechIconTailwindCSS')
const TechIconVue = resolveComponent('TechIconVue')
const TechIconWebpack = resolveComponent('TechIconWebpack')
const TechIconWordPress = resolveComponent('TechIconWordPress')

const props = defineProps<{
  icon: ITechIcon
}>()

const techIcon = computed(() => {
  switch (props.icon) {
    case 'adobe':
      return TechIconAdobe
    case 'affinity':
      return TechIconAffinity
    case 'blender':
      return TechIconBlender
    case 'bootstrap':
      return TechIconBootstrap
    case 'css':
      return TechIconCSS
    case 'figma':
      return TechIconFigma
    case 'git':
      return TechIconGit
    case 'github':
      return TechIconGitHub
    case 'html':
      return TechIconHTML
    case 'javascript':
      return TechIconJavaScript
    case 'linode':
      return TechIconLinode
    case 'netlify':
      return TechIconNetlify
    case 'next':
      return TechIconNext
    case 'npm':
      return TechIconNPM
    case 'nuxt':
      return TechIconNuxt
    case 'php':
      return TechIconPHP
    case 'react':
      return TechIconReact
    case 'sass':
      return TechIconSass
    case 'tailwindcss':
      return TechIconTailwindCSS
    case 'vue':
      return TechIconVue
    case 'webpack':
      return TechIconWebpack
    case 'wordpress':
      return TechIconWordPress
  }
})
</script>

<template>
  <component :is="techIcon" />
</template>
