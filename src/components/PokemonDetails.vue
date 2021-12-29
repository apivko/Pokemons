<template>
  <div class="column details-container">
    <div class="row">
      <div>{{ `Name: ${name}` }}</div>
      <div><img width="128" height="128" :src="image" :alt="name" /></div>
    </div>
    <div>{{ `Type: ${type}` }}</div>
    <div>{{ `Description: ${description}` }}</div>
    <div>{{ `Height: ${height}` }}</div>
    <div>{{ `Weight: ${weight}` }}</div>
    <div>{{ `Abilities: ${abilities}` }}</div>
  </div>
</template>

<script>
export default {
  name: "Pokemon-Details",
  data: () => {
    return {
      name: "",
      image: "",
      type: "",
      description: "",
      height: "",
      weight: "",
      abilities: "",
    };
  },
  mounted: function () {
    this.$root.$on("show-details", (e) => {
      const {imgData, details} = e
      this.name = details.name.charAt(0).toUpperCase() + details.name.slice(1)
      this.image = imgData.sprites.versions["generation-v"]["black-white"].animated.front_default;
      // this.image = imgData.sprites.front_default;
      this.type = imgData.type;
      this.height = imgData.height;
      this.weight = imgData.weight;
      // this.description = details.flav
    });
  },
};
</script>

<style scoped>
.details.container {
  display: flex;
  
}
span, div {
  letter-spacing: 3px;
}
</style>
