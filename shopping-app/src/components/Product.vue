<template>
  <div class="product">
    <h3>{{ product.name }}</h3>
    <p>{{ product.detail }}</p>
    <button @click="$emit('add-to-cart', product)">Add to Cart</button>
  </div>
</template>

<script setup>
defineProps({
  product: Object,
});
</script>
