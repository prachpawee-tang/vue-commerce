<script setup>
import SectionHeader from '@/components/SectionHeader.vue'
import { useProductStore } from '@/stores/productStore'
import { ref, computed, onMounted } from 'vue'
import ProductItem from '@/components/ProductItem.vue'

const productStore = useProductStore()
const currentIndex = ref(0)

// Fetch products if store is empty
onMounted(async () => {
  if (productStore.products.length === 0) {
    await productStore.fetchProducts()
  }
})

// Get first 4 products for the carousel
const visibleProducts = computed(() => {
  return productStore.products.slice(currentIndex.value, currentIndex.value + 4)
})

const handleCarouselPrev = () => {
  currentIndex.value = Math.max(0, currentIndex.value - 1)
}

const handleCarouselNext = () => {
  currentIndex.value = Math.min(productStore.products.length - 4, currentIndex.value + 1)
}
</script>

<template>
  <!-- today flash sale section  -->
  <SectionHeader
    smallText="Limited Time Offer"
    smallTextColor="red"
    bigText="Special Deals"
    :timer="172800"
    :showViewAll="false"
    :showCarouselControls="true"
    @prev="handleCarouselPrev"
    @next="handleCarouselNext"
  />

  <div class="product-carousel">
    <ProductItem
      v-for="product in visibleProducts"
      :key="product.id"
      :product="product"
      @add-to-cart="productStore.addToCart(product)"
    />
  </div>

  <div class="divider"></div>

  <!-- product category section -->
  <SectionHeader
    smallText="Explore"
    smallTextColor="blue"
    bigText="Categories"
    :showViewAll="false"
    :showCarouselControls="false"
  />
  <div class="category-grid">
    <router-link
      v-for="category in productStore.categories"
      :key="category"
      :to="`/category/${category}`"
      class="category-card"
    >
      <h3>{{ category }}</h3>
    </router-link>
  </div>
</template>

<style scoped>
.product-carousel {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.product-card {
  border: 1px solid #ddd;
  padding: 1rem;
  text-align: center;
}

.product-card img {
  max-width: 100%;
  height: auto;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  /* margin-top: 2rem; */
}

.category-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.category-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #3b82f6;
}

.divider {
  width: 100%;
  height: 1px;
  background-color: #333333;
  margin: 4rem 0;
}
</style>
