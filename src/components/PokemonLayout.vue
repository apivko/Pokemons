<template>
  <div class="column col layout">
    <div class="row header">
      <slot name="header"></slot>
    </div>
    <div class="row main">
      <div class="list">
        <slot name="list"></slot>
      </div>
      <div class="details">
        <slot name="details"></slot>
      </div>
    </div>
    <div class="row footer">
      <slot name="controls"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pokemons-Layout",
};
</script>

<style scoped>
.layout {
  margin: 100px;
}
.main {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 500px;
  border: 2px solid black;
  
}
.list {
  width: 30%;
  height: 100%;
  border: 1px solid #8d8d8d;
}
.details {
  background-image: url("../assets/pokemon-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 70%;
  height: 100%;
}
</style>
