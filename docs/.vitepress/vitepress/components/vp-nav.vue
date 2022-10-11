<script setup lang="ts">
// import { isClient } from '@vueuse/core'

import { ref } from 'vue';

// import { useSidebar } from '../composables/sidebar'
// import { useFullScreen } from '../composables/fullscreen'
// import { useToggleWidgets } from '../composables/toggle-widgets'
// import { breakpoints } from '../constant'
// import VpNavbar from './vp-navbar.vue'
// import VpNavFull from './vp-nav-full.vue'

// const { hasSidebar } = useSidebar()
// const { toggleFullScreen, isFullScreen } = useFullScreen()
// const close = () => toggleFullScreen(false)

// useToggleWidgets(isFullScreen, () => {
//   if (!isClient) return
//   if (window.outerWidth >= breakpoints.md) {
//     close()
//   }
// })

const isFullScreen = ref(true)
const hasSidebar = ref(true)

const toggleFullScreen = () => {}
const close = () => {}
</script>
A
<template>
  <header :class="{ navbar: true, 'has-sidebar': hasSidebar }">
    123
    <VpNavbar :full-screen="isFullScreen" @toggle="toggleFullScreen" />
    <VpNavFull :full-screen="isFullScreen" class="full-screen" @close="close" />
  </header>
</template>