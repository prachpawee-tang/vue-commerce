<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/products">Products</RouterLink>
    <RouterLink to="/cart">Cart</RouterLink>
  </nav>

  <RouterView />
</template>

<style scoped></style>
