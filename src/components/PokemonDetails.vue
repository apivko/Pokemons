<template>
  <div>
    <div class="card">
      <div id="name">{{ name }}</div>
      <div id="type">{{ `Type: ${type}` }}</div>
      <div id="height">{{ `Height: ${height} m` }}</div>
      <div id="weight">{{ `Weight: ${weight} kg` }}</div>
      <div id="description">{{ `"..${description}.."` }}</div>
    </div>
    <div id="image">
      <img width="256" height="256" :src="image" :alt="name" />
    </div>
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
    };
  },
  mounted: function () {
    this.$root.$on("show-details", this.parseData.bind(this));
  },
  methods: {
    parseData: function (data) {
      const { imgData, details } = data;
      this.name = details.name.charAt(0).toUpperCase() + details.name.slice(1);
      this.image =
        imgData.sprites.versions["generation-v"][
          "black-white"
        ].animated.front_default;
      this.type = imgData.type;
      this.height = imgData.height;
      this.weight = imgData.weight;
      this.description = details.flavor_text_entries[0].flavor_text.replace(
        /\n|\f/g,
        " "
      );
    },
  },
};
</script>

<style scoped>
span,
div {
  color: #404040;
  letter-spacing: 3px;
  font-size: 10pt;
}
#title,
#more-details {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

#description {
  width: 240px;
  text-align: center;
  margin-top: 20px;
}
#image {
  position: relative;
  top: -250px;
  left: 150px;
}
#name {
  font-weight: bolder;
  font-size: 13pt;
}

.card {
  width: 250px;
  height: 400px;
  text-align: left;
  margin: 20px 50px;
  margin-bottom: 30px;
  padding: 15px;
  background-color: #ced7ef;
  color: gray;
  opacity: 0.85;
  vertical-align: middle;
  box-shadow: 0 0 10px 5px;
}
</style>
