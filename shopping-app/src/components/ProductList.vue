<template>
  <div class="product-list">
    <div v-for="category in groupedProducts" :key="category.name">
      <h2>{{ category.name }}</h2>
      <div v-for="product in category.products" :key="product.id">
        <Product :product="product" @add-to-cart="addToCart" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "../store/useStore.js";
import Product from "./Product.vue";
const store = useStore();

const groupedProducts = computed(() => {
  const categories = {};
  store.filteredProducts.forEach((product) => {
    if (!categories[product.category]) {
      categories[product.category] = { name: product.category, products: [] };
    }
    categories[product.category].products.push(product);
  });
  return Object.values(categories);
});

const addToCart = (product) => {
  store.addToCart(product);
};
</script>
