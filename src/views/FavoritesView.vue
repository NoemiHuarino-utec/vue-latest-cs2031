<script>
import { pokemon } from "../datasets/pokemon";
import PokemonRow from "../components/PokemonRow.vue";
import { useUserStore } from "../stores/user";

export default {
  name: "FavoritesView",
  data() {
    return {
      pokemon: [],
    };
  },
  components: {
    PokemonRow,
  },
  created() {
    const userStore = useUserStore();
    const favoritePokemon = userStore.getFavorites();
    this.pokemon = pokemon.filter((candidate) =>
      favoritePokemon.includes(candidate.num)
    );
  },
};
</script>

<template>
  <div class="pokedex">
    <table v-if="!!pokemon" class="table table-dark">
      <thead>
        <th>#</th>
        <th>Nombre</th>
        <th>Tipo</th>
        <th>Imagen</th>
        <th>Debilidades</th>
        <th>Evoluciones</th>
        <th>Favorito</th>
      </thead>
      <tbody>
        <PokemonRow
          v-for="(pokemon, index) in pokemon"
          :key="index"
          :types="pokemon.type"
          :name="pokemon.name"
          :img="pokemon.img"
          :num="pokemon.num"
          :weaknesses="pokemon.weaknesses"
          :next_evolution="pokemon['next_evolution']"
        ></PokemonRow>
      </tbody>
    </table>
  </div>
  <div v-if="!pokemon">Aun no tienes favoritos!</div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .pokedex {
    margin-top: 30%;
    margin-bottom: 30%;
    width: 800px;
    overflow: auto;
    max-height: 70vh;
    align-items: center;
  }
}
</style>
