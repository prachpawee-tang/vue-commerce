<template>
  <div v-if="isLoading" class="loading">Loading product details...</div>
  <div v-else>
    <div class="product-detail-container">
      <div class="product-image">
        <img :src="product?.image" alt="Product Image" class="product-img" />
      </div>
      <div class="product-info">
        <h1 class="product-name">{{ product?.title }}</h1>
        <p class="product-price">${{ product?.price }}</p>
        <p class="product-description">{{ product?.description }}</p>
        <div class="quantity-selector">
          <label for="quantity">Quantity:</label>
          <input type="number" id="quantity" v-model="quantity" min="1" class="quantity-input" />
        </div>
        <button @click="addToCart" class="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>

    <div class="related-products">
      <SectionHeader smallText="Related Products" smallTextColor="red" bigText="" />
      <div class="related-product-list">
        <ProductItem
          v-for="relatedProduct in products
            .filter((p) => p.category === product.category && p.id !== product.id)
            .slice(0, 4)"
          :key="relatedProduct.id"
          :product="relatedProduct"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { useProductStore } from '@/stores/productStore'
import { mapState, mapActions } from 'pinia'
import SectionHeader from '@/components/SectionHeader.vue'
import ProductItem from '@/components/ProductItem.vue'

export default {
  components: {
    SectionHeader,
    ProductItem,
  },
  data() {
    return {
      quantity: 1,
      isLoading: true,
    }
  },
  computed: {
    ...mapState(useProductStore, ['product', 'products']),
    productId() {
      return this.$route.params.id
    },
  },
  methods: {
    ...mapActions(useProductStore, ['fetchProducts', 'fetchProduct']),
    addToCart() {
      // Add to cart logic here
      console.log(`Added ${this.quantity} of ${this.product.name} to cart`)
    },
  },
  async created() {
    this.$watch(
      () => this.$route.params.id,
      async (newId, oldId) => {
        if (newId !== oldId) {
          this.isLoading = true
          await this.fetchProduct(newId)
          this.isLoading = false
        }
      },
    )
    if (this.products.length === 0) {
      await this.fetchProducts()
    }
    if (this.productId) {
      await this.fetchProduct(this.productId)
    }
    this.isLoading = false
  },
}
</script>

<style scoped>
.product-detail-container {
  display: flex;
  gap: 2rem;
  padding: 2rem;
}

.product-image {
  flex: 1;
  aspect-ratio: 1/1;
  overflow: hidden;
  background-color: white;
  padding: 1em;
  border-radius: 1em;
}

.product-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  margin: 0 auto;
}

.product-info {
  flex: 2;
  /* max-width: 500px; */
}

.product-name {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.product-price {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.product-description {
  margin-bottom: 2rem;
}

.quantity-selector {
  margin-bottom: 2rem;
}

.quantity-input {
  margin-left: 1rem;
  padding: 0.5rem;
  width: 100px;
}

.add-to-cart-btn {
  background-color: #4caf50;
  color: white;
  padding: 1rem 2rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 8px;
}

.add-to-cart-btn:hover {
  background-color: #45a049;
}

.related-products {
  margin-top: 2rem;
  padding: 1rem;
}

.related-product-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-top: 1rem;
}

/* Optional: Add responsive behavior */
@media (max-width: 1024px) {
  .related-product-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .related-product-list {
    grid-template-columns: 1fr;
  }
}

.loading {
  text-align: center;
  font-size: 1.2rem;
  padding: 2rem;
}
</style>
