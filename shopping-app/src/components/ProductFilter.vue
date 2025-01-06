<template>
  <div>
    <input
      type="text"
      v-model="searchTerm"
      @input="updateSearch"
      placeholder="Search product's name"
    />
    <select v-model="selectedCategory" @change="filterByCategory">
      <option value="">All Categories</option>
      <option v-for="category in categories" :key="category" :value="category">
        {{ category }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "../store/useStore.js";
const Store = useStore();

const searchTerm = ref("");
const selectedCategory = ref("");
const categories = [
  "Electronics",
  "Clothing",
  "Books",
  "Home & Kitchen",
  "Sports & Outdoors",
];

const updateSearch = () => {
  store.setSearchTerm(searchTerm.value);
};

const filterByCategory = () => {
  store.setSelectedCategory(selectedCategory.value);
};
</script>
