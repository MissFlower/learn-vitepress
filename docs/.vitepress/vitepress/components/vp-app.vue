<template>
  <div class="App">
      <VPNav />
      <VPSidebar />
      <VPContent></VPContent>
  </div>
</template>

<script lang="ts" setup>
import VPNav from './vp-nav.vue'
import VPSidebar from './vp-sidebar.vue'
import VPContent from './vp-content.vue'
</script>
