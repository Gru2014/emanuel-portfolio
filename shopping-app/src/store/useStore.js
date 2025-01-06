import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    products: [],
    cart: [],
    searchTerm: "",
    selectedCategory: "",
  }),
  actions: {
    async fetchProducts() {
      const response = await axios.get(`${apiUrl}/products`);
      this.products = response.data;
    },
    addToCart(product) {
      const item = this.cart.find((p) => p.id === product.id);
      if (item) {
        item.quantity++;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
    },
    setSearchTerm(term) {
      this.searchTerm = term;
    },
    setSelectedCategory(category) {
      this.selectedCategory = category;
    },
  },
  getters: {
    filteredProducts: (state) => {
      return state.products.filter((product) =>
        product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    },
  },
});
