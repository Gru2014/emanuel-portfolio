<template>
  <div>
    <div class="col-6">
      <ProductFilter />
      <ProductList />
    </div>
    <div class="col-6">
      <Cart />
    </div>
  </div>
</template>

<script setup>
import ProductFilter from "./ProductFilter.vue";
import ProductList from "./ProductList.vue";
import Cart from "./Cart.vue";
import { useStore } from "../store/useStore.js";
import { onMounted } from "vue";

const store = useStore();
onMounted(() => {
  store.fetchProducts();
});
</script>
