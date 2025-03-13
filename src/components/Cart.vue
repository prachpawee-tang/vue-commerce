<template>
  <div>
    <h1>Cart</h1>
    <div v-if="cart.length === 0">Your cart is empty.</div>
    <div v-else>
      <div v-for="item in cart" :key="item.id" class="cart-item">
        <h2>{{ item.title }}</h2>
        <p>${{ item.price }} x {{ item.quantity }}</p>
        <button @click="removeFromCart(item.id)">Remove</button>
        <button @click="removeAllFromCart(item.id)">Remove All</button>
      </div>
      <p>Total: ${{ cartTotal }}</p>
    </div>
  </div>
</template>

<script>
import { useProductStore } from '@/stores/productStore'
import { mapState, mapActions } from 'pinia'

export default {
  computed: {
    ...mapState(useProductStore, ['cart', 'cartTotal']),
  },
  methods: {
    ...mapActions(useProductStore, ['removeFromCart']),
    removeAllFromCart(productId) {
      const store = useProductStore()
      store.cart = store.cart.filter((item) => item.id !== productId)
    },
  },
}
</script>
