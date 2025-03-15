<template>
  <main>
    <h1 v-if="$route.params.category" class="title">Category: {{ $route.params.category }}</h1>
    <h1 v-else class="title">Products</h1>

    <div v-if="loading">Loading...</div>
    <div v-else class="product-grid">
      <ProductItem
        v-for="product in visibleProducts"
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
    visibleProducts() {
      if (this.$route.params.category) {
        return this.products.filter((product) => product.category === this.$route.params.category)
      }

      return this.products
    },
  },
  methods: {
    ...mapActions(useProductStore, ['fetchProducts', 'addToCart']),
  },

  async created() {
    const category = this.$route.params.category
    console.log('category', category)
    await this.fetchProducts()
  },
}
</script>

<style scoped>
.title {
  margin-bottom: 1em;
}
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
</style>
