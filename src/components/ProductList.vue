<template>
  <div>
    <h1>Products</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-for="product in products" :key="product.id" class="product">
        <h2>{{ product.title }}</h2>
        <p>{{ product.description }}</p>
        <p>${{ product.price }}</p>
        <button @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useProductStore } from '@/stores/productStore'
import { mapState, mapActions } from 'pinia'

export default {
  computed: {
    ...mapState(useProductStore, ['products', 'loading']),
  },
  methods: {
    ...mapActions(useProductStore, ['fetchProducts', 'addToCart']),
  },
  async created() {
    await this.fetchProducts()
  },
}
</script>

<style scoped>
.product {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
}
</style>
