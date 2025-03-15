<template>
  <h1>Cart</h1>
  <div v-if="cart.length === 0">Your cart is empty.</div>
  <table v-else class="modern-table">
    <thead>
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Subtotal</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in cart" :key="item.id" class="table-row">
        <td class="product-cell">
          <img :src="item.image" :alt="item.title" class="product-image" />
          <span>{{ item.title }}</span>
        </td>
        <td>${{ item.price }}</td>
        <td>
          <input
            type="number"
            v-model.number="item.quantity"
            min="1"
            @change="updateQuantity(item.id, item.quantity)"
            class="quantity-input"
          />
        </td>
        <td>${{ (item.price * item.quantity).toFixed(2) }}</td>
      </tr>
    </tbody>
  </table>
  <p class="total">Total: ${{ cartTotal }}</p>
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
    updateQuantity(productId, quantity) {
      const store = useProductStore()
      const item = store.cart.find((item) => item.id === productId)
      if (item) {
        item.quantity = quantity > 0 ? quantity : 1
      }
    },
  },
}
</script>

<style scoped>
.modern-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px;
  margin: 20px 0;
  overflow: hidden;
}

.modern-table th {
  background-color: #2d2d2d;
  padding: 15px 20px;
  text-align: left;
  font-weight: 600;
  color: #ffffff;
  border-bottom: 2px solid #444;
}

.modern-table tbody {
  border-radius: 12px;
  overflow: hidden;
}

.table-row {
  background-color: #2d2d2d;
  border-radius: 12px;
  overflow: hidden;
}

.table-row td {
  padding: 15px 20px;
  border-color: #444;
  color: #ffffff;
  white-space: nowrap;
}

.table-row td:first-child {
  border-left: 1px solid #444;
  border-radius: 8px 0 0 8px;
}

.table-row td:last-child {
  border-right: 1px solid #444;
  border-radius: 0 8px 8px 0;
}

.product-cell {
  display: flex;
  align-items: center;
  gap: 15px;
}

.product-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 8px;
}

.quantity-input {
  width: 70px;
  padding: 8px;
  background-color: #3d3d3d;
  border: 1px solid #444;
  border-radius: 6px;
  font-size: 14px;
  color: #ffffff;
  transition: border-color 0.2s ease;
}

.quantity-input:focus {
  outline: none;
  border-color: #80bdff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.total {
  color: #ffffff;
  font-size: 1.2rem;
  margin-top: 20px;
}
</style>
