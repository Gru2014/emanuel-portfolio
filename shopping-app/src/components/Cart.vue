<template>
  <div class="cart">
    <h2>Cart</h2>
    <div v-for="item in cart" :key="item.id">
      <p>{{ item.name }} ({{ item.quantity }})</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "../store/useStore.js";
const store = useStore();
const cart = computed(() => store.cart);
</script>
