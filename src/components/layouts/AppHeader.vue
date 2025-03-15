<template>
  <header class="header">
    <nav class="nav-container">
      <div class="logo">
        <RouterLink to="/">MyStore</RouterLink>
      </div>
      <div class="nav-links">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/products">Products</RouterLink>
      </div>

      <div class="cart-icon">
        <RouterLink to="/cart">
          <span class="cart-badge">{{ cartQuantity }}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-shopping-cart"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </RouterLink>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState } from 'pinia'
import { useProductStore } from '@/stores/productStore'

export default {
  computed: {
    ...mapState(useProductStore, ['cartQuantity']),
  },
}
</script>

<style scoped>
.header {
  background-color: #0a0a0a;
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--border-color);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo a {
  color: var(--text-color);
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: var(--link-color);
}

.cart-icon {
  position: relative;
}

.cart-icon a {
  color: var(--text-color);
  display: flex;
  align-items: center;
  text-decoration: none;
}

.cart-badge {
  position: absolute;
  top: -6px;
  right: -6px;
  background-color: #ff4757;
  color: white;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
  font-weight: bold;
  padding: 0;
  line-height: 1;
}

.feather-shopping-cart {
  width: 24px;
  height: 24px;
}

@media (max-width: 768px) {
  .nav-links {
    gap: 1rem;
  }
}
</style>
