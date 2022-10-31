import { defineStore, acceptHMRUpdate } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    name: "",
    email: "",
    favoritos: [],
  }),

  actions: {
    logout() {
      this.name = "";
      this.email = "";
      // we could do other stuff like redirecting the user
    },
    /**
     * Attempt to login a user
     * @param {string} user
     */
    async login(user) {
      this.name = user;
      this.email = this.name + "@utec.edu.pe";
    },
    isAuthenticated() {
      return this.name !== "";
    },
    addFavorito(num) {
      this.favoritos.push(num);
      localStorage.setItem("favoritos", JSON.stringify(this.favoritos));
    },
    removeFavorito(num) {
      this.favoritos = this.favoritos.filter((favorito) => favorito !== num);
      localStorage.setItem("favoritos", JSON.stringify(this.favoritos));
    },
    getFavorites() {
      return JSON.parse(localStorage.getItem("favoritos")) || [];
    }
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}

//export default useUserStore;
