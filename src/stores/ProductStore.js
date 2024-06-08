import { defineStore } from "pinia";
export const useProductStore = defineStore("ProductStore", {
  // data
  state: () => {
    return {
      products: [],
    };
  },
  // Méthods
  actions: {
    async fill() {
      this.products = (await import("@/data/products.json")).default;
      // this.products = (await axios.get('some/end/point')).data;
    }
  }
  // getters
});
