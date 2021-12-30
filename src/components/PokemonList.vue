<template>
  <div class="column col pokemons-list-container">
    <div v-if="loading"><Pokeball-Spinner /></div>
    <div v-else-if="error" class="error-message">
      Error- Cannot display pokemons !
    </div>
    <div
      v-else
      class="row"
      v-for="(pokemon, index) in pokemonsArr"
      :key="index"
    >
      <Pokemon-Row
        :ref="`row-${index}`"
        :pokemon="pokemon"
        :index="index"
        @onLoaded="onLoaded"
        @onError="onError"
      />
    </div>
  </div>
</template>

<script>
import PokemonRow from "./PokemonRow.vue";
import PokeballSpinner from "./PokeballSpinner.vue";
import { apiFetcher, BASE_POKEMON_URL } from "../pokemonUtils";
export default {
  name: "Pokemon-List",
  data: () => {
    return {
      pokemons: {},
      error: "",
      loading: true,
    };
  },

  components: {
    PokemonRow,
    PokeballSpinner,
  },
  computed: {
    pokemonsArr: function () {
      return Object.values(this.pokemons);
    },
  },
  created: async function () {
    const { error, results } = await apiFetcher(`${BASE_POKEMON_URL}/pokemon`);
    this.error = error ?? "";
    if (results) {
      this.pokemons = { ...results };
      this.loading = false;
    }
  },
  methods: {
    onLoaded: function (pokemonDataObj) {
      const { index, imgData, details } = pokemonDataObj;
      Object.assign(this.pokemons[index], { imgData, details });
      this.loading = false;
      if (index == 0) {
        this.$refs['row-0'][0].showDetails();
      }
    },
    onError: function () {
      this.error = "error"; //text does not have any meaning, used here as a flag for now..
    }
  }
};
</script>

<style>
.pokemons-list-container {
  height: 100%;
  overflow-y: scroll;
}
.error-message {
  display: flex;
}
</style>
