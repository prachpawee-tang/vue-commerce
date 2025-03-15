<template>
  <div class="product">
    <div class="image-container">
      <div class="product-image">
        <img :src="product.image" :alt="product.title" />
      </div>
      <button class="add-to-cart-btn" @click="addToCart(product)">Add to Cart</button>
    </div>
    <div class="product-content">
      <router-link :to="`/products/${product.id}`" class="product-link">
        <h2>
          <span>{{ product.title }}</span>
        </h2>
        <p>${{ product.price }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToCart(product) {
      this.$emit('add-to-cart', product)
    },
  },
}
</script>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}

.product {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
  margin-bottom: 0;
  background-color: #1f2937;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #1f2937;
  padding: 10px;
}

.image-container {
  position: relative;
  overflow: hidden;
}

.add-to-cart-btn {
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  opacity: 0;
  transition: all 0.3s ease;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 12px 16px;
  cursor: pointer;
  font-size: 1rem;
}

.product:hover .add-to-cart-btn {
  bottom: 20px;
  opacity: 1;
}

.product-content {
  padding: 15px;
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #374151;
  border-radius: 0 0 8px 8px;
  border: 1px solid #4b5563;
  border-top: none;
}

.product h2 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: #f3f4f6;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  width: 100%;
}

.product h2:hover {
  overflow: visible;
}

.product h2:hover span {
  display: inline-block;
  animation: slideText 10s linear infinite;
}

.product h2 span {
  display: inline-block;
  min-width: 100%;
}

@keyframes slideText {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.product p {
  margin: 0.5rem 0;
  color: #d1d5db;
}

.product p:last-of-type {
  font-size: 1.1rem;
  font-weight: 600;
  color: #f3f4f6;
}

button {
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #1d4ed8;
}

.product-link {
  text-decoration: none;
  color: inherit;
  display: block;
  flex: 1;
}
.product-link::after {
  display: none;
}
</style>
