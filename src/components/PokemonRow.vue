<template>
  <div class="row-container">
    <span>{{ pokemonName }}</span>
    <img
      width="64"
      height="64"
      :src="`${pokemonIcon}`"
      :alt="`${pokemon.name}`"
    />
    <div>
      <button class="catch-btn" @click="showDetails">Catch it!</button>
    </div>
  </div>
</template>

<script>
import { apiFetcher, BASE_POKEMON_URL } from "../pokemonUtils";

export default {
  name: "Pokemon-Row",
  props: {
    pokemon: {
      required: true,
      type: Object,
    },
    index: {
      required: true,
      type: Number,
    },
  },
  data: () => {
    return {
      pokemonIcon: "",
    };
  },
  computed: {
    pokemonName: function () {
      return (
        this.pokemon.name.charAt(0).toUpperCase() + this.pokemon.name.slice(1)
      );
    },
  },
  created: async function () {
    const detailsPromise = apiFetcher(
      `${BASE_POKEMON_URL}/pokemon-species/${this.pokemon.name}`
    );
    const imgDataPromise = apiFetcher(
      `${BASE_POKEMON_URL}/pokemon/${this.pokemon.name}`
    );
    Promise.all([detailsPromise, imgDataPromise]).then((results) => {
      const details = results[0];
      const imgData = results[1];
      if (details.error || imgData.error) {
        this.$emit("onError");
      } else {
        this.pokemonIcon = imgData.sprites.front_default;
        this.$emit("onLoaded", { details, imgData, index: this.index });
      }
    });
  },
  methods: {
    showDetails: function () {
      const pokemons = this.$parent.pokemons
      this.$root.$emit('show-details', pokemons[this.index])
    }
  }
};
</script>
<style scoped>
.row-container {
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px;
}

.row-container > span {
  color: green;
  letter-spacing: 3px;
}
.catch-btn {
  cursor: pointer;
}
</style>
