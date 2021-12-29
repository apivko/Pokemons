<template>
  <div class="container-style">
    <Pokemon-Layout>
      <template v-slot:header>
        <Pokemon-Header />
      </template>
      <template v-slot:list>
        <Pokemon-List />
      </template>
      <template v-slot:details>
        <Pokemon-Details />  
      </template>
      <template v-slot:controls>
        <Pokemon-Controls />
      </template>
    </Pokemon-Layout>
  </div>
</template>

<script>
import PokemonHeader from "./PokemonHeader.vue";
import PokemonList from "./PokemonList.vue";
import PokemonLayout from "./PokemonLayout.vue";
import PokemonControls from './PokemonControls.vue';
import PokemonDetails from './PokemonDetails.vue';
export default {
  name: "Pokemons",
  components: {
    PokemonLayout,
    PokemonHeader,
    PokemonList,
    PokemonControls,
    PokemonDetails
  },
};
</script>

<style scoped>
.container-style {
  /* background-image: url("../assets/pokemons-main.png");
  background-repeat: no-repeat; */
  margin-left: 200px;
  margin-right: 200px;
  height: 700px;
}
</style>
