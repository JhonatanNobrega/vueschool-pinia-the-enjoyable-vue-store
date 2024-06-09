import { defineStore } from "pinia";

export const useAuthUserStore = defineStore("AuthUserStore", {
  state() {
    return {
      username: "JhonatanNDev"
    };
  },
  // getters: {
  //   username: () => "jhonatan e ingryd"
  // },
  actions: {
    visitTwitterProfile() {
      window.open(`https://twitter.com/${this.username}`, "_blank");
    }
  }
});