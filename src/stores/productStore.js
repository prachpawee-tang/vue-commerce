import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    cart: [],
  }),
  actions: {
    async fetchProducts() {
      const response = await axios.get('https://fakestoreapi.com/products')
      this.products = response.data
    },
    addToCart(product) {
      const cartItem = this.cart.find((item) => item.id === product.id)
      if (cartItem) {
        cartItem.quantity += 1 // Increment quantity if item already exists
      } else {
        this.cart.push({ ...product, quantity: 1 }) // Add new item with quantity 1
      }
    },
    removeFromCart(productId) {
      const cartItem = this.cart.find((item) => item.id === productId)
      if (cartItem) {
        if (cartItem.quantity > 1) {
          cartItem.quantity -= 1 // Decrement quantity if more than 1
        } else {
          this.cart = this.cart.filter((item) => item.id !== productId) // Remove item if quantity is 1
        }
      }
    },
  },
  getters: {
    cartTotal() {
      return this.cart.reduce((total, item) => total + item.price * item.quantity, 0)
    },
    cartQuantity() {
      return this.cart.reduce((total, item) => total + item.quantity, 0)
    },
    categories() {
      const categories = new Set()
      this.products.forEach((product) => {
        categories.add(product.category)
      })
      return Array.from(categories)
    },
    categoryList(category) {
      return this.products.filter((product) => product.category === category)
    },
  },
})
