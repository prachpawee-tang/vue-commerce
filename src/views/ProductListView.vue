<template>
  <main>
    <h1>Products</h1>
    <div v-if="loading">Loading...</div>
    <div v-else class="product-grid">
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add-to-cart="addToCart"
      />
    </div>
  </main>
</template>

<script>
import { useProductStore } from '@/stores/productStore'
import { mapState, mapActions } from 'pinia'
import ProductItem from '@/components/ProductItem.vue'

export default {
  components: {
    ProductItem,
  },
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
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}
</style>
