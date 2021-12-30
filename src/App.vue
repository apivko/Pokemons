<template>
  <div id="app">
    <Pokemons/>
  </div>
</template>

<script>
import Pokemons from './components/Pokemons.vue'

export default {
  name: 'App',
  components: {
    Pokemons
  }
}
</script>

<style>
@import url('http://fonts.cdnfonts.com/css/pokemon-solid');
#app {
  background-image: url("./assets/poke-texture.png");
  background-repeat: no-repeat;
  background-size: cover;
  font-family: 'Pokemon Solid', sans-serif;
  color: #ffffff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

</style>
