<script setup>
import { RouterView } from 'vue-router'
import { ref, onMounted, nextTick } from 'vue'
import AppHeader from '@/components/layouts/AppHeader.vue'
import AppFooter from '@/components/layouts/AppFooter.vue'

const headerHeight = ref(0)
const footerHeight = ref(0)

const headerRef = ref(null)
const footerRef = ref(null)

onMounted(() => {
  nextTick(() => {
    headerHeight.value = headerRef.value?.$el?.clientHeight || headerRef.value?.clientHeight || 0
    footerHeight.value = footerRef.value?.$el?.clientHeight || footerRef.value?.clientHeight || 0
  })
})
</script>

<template>
  <AppHeader ref="headerRef" />
  <div
    class="page-container"
    :style="{ minHeight: `calc(100dvh - ${headerHeight}px - ${footerHeight}px)` }"
  >
    <RouterView class="content" />
  </div>
  <AppFooter ref="footerRef" />
</template>

<style scoped>
:root {
  --bg-color: #1a1a1a;
  --text-color: #f8f9fa;
  --link-color: #64b5f6;
  --border-color: #2d2d2d;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
  padding-bottom: 100px;
}

.page-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
}

.content {
  flex: 1;
}
</style>
