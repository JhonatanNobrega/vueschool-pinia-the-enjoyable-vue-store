import { groupBy } from "lodash";
import { defineStore, acceptHMRUpdate } from "pinia";
import { useAuthUserStore } from "@/stores/AuthUserStore";
export const useCartStore = defineStore("CartStore", {
  historyEnabled: true,
  state() {
    return {
      items: [],
    };
  },
  getters: {
    count: (state) => state.items.length,
    isEmpty: (state) => state.count === 0,
    grouped: (state) => {
      const grouped = groupBy(state.items, (item) => item.name);
      const sorted = Object.keys(grouped).sort();
      let inOrder = {};
      sorted.forEach(key => inOrder[key] = grouped[key]);
      return inOrder;
    },
    groupCount: (state) => (name) => state.grouped[name].length,
    total: (state) => state.items.reduce((acc, p) => acc + (p.price), 0)
  },
  actions: {
    checkout() {
      const authUserStore = useAuthUserStore();
      alert(`${authUserStore.username} just bought ${this.count} items at a total of ${this.total} `);
    },
    addToCart(count, item) {
      count = parseInt(count);
      for (let i = 0; i < count; i++) {
        this.items.push({ ...item });
      }
    },
    clearItem(itemName) {
      this.items = this.items.filter(e => e.name !== itemName);
    },
    setItemCount(item, count) {
      this.clearItem(item.name);
      this.addToCart(count, item);
    }
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot));
}