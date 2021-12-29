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
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Pokemon Solid', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
