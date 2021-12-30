<template>
  <div
    ref="pokemons-list"
    class="column col pokemons-list-container"
    @scroll="onScroll"
  >
    <div v-if="loading"><Pokeball-Spinner /></div>
    <div v-else-if="error" class="error-message">
      Error- Cannot display pokemons !
    </div>
    <div
      v-else
      class="row"
      v-for="(pokemon, index) in getPokemonArr()"
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
      allLoaded: false,
      page: 0,
    };
  },

  components: {
    PokemonRow,
    PokeballSpinner,
  },
  created: async function () {
    await this.loadMore();
  },
  methods: {
    getPokemonArr: function (){
      return Object.values(this.pokemons);
    },
    onLoaded: function (pokemonDataObj) {
      const { index, imgData, details } = pokemonDataObj;
      Object.assign(this.pokemons[index], { imgData, details });
      this.loading = false;
      if (index == 0) {
        this.$refs["row-0"][0].showDetails();
      }
    },
    onError: function () {
      this.error = "error"; //text does not have any meaning, used here as a flag for now..
    },
    onScroll: function () {
      if (this.allLoaded) {
        return;
      }
      const listEl = this.$refs["pokemons-list"];
      if (
        listEl.scrollTop + listEl.offsetHeight >
        Math.floor(listEl.scrollHeight * 0.75)
      ) {
        this.loading = true;
        this.loadMore();
      }
    },
    loadMore: async function () {
      const limit = 20;
      const offset = this.page * limit
      const { error, results } = await apiFetcher(
        `${BASE_POKEMON_URL}/pokemon?limit=${limit}&offset=${offset}`
      );
      this.error = error ?? "";
      if (results?.length) {
        // Object.assign(this.pokemons, {...results})
        results.map((r,index)=>{
          this.pokemons[`${offset + index}`] = r
        })
        this.loading = false;
        this.page++;
      }else {
        this.allLoaded = true
      }
    },
  },
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
