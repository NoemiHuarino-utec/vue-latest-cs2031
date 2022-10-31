<script>
import { pokemon } from "../datasets/pokemon";
import PokemonRow from "../components/PokemonRow.vue";

export default {
  name: "PokedexView",
  data() {
    return {
      pokemon: pokemon,
    };
  },
  components: {
    PokemonRow,
  },
};
</script>

<template>
  <div class="pokedex">
    <table class="table table-dark">
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
