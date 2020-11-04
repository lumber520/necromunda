<template>
  <h1>{{ title }}</h1>
  <div id="map" class="container-fluid">
    <div class="row justify-content-center">
      <div class="fade-in ">
        <img
          @click="changeMap"
          :src="mapImage.image"
          alt="Current Campaign Map"
          @mouseover="changeMap"
          @mouseleave="changeMap"
        />
      </div>
    </div>
    <AppButton class="map-btn" @click="changeMap">{{
      mapImage.buttonText
    }}</AppButton>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import AppButton from "./AppButton";

export default {
  components: {
    AppButton
  },
  name: "Map",
  setup: function() {
    const title = ref("Current Map");
    const mapImage = reactive({
      image: require("../assets/necromunda-map-main.png"),
      buttonText: "Show labels"
    });
    function changeMap() {
      if (mapImage.image === require("../assets/necromunda-map-main.png")) {
        mapImage.image = require("../assets/necromunda-map-main-lables.png");
        mapImage.buttonText = "Hide Labels";
      } else if (
        mapImage.image === require("../assets/necromunda-map-main-lables.png")
      ) {
        mapImage.image = require("../assets/necromunda-map-main.png");
        mapImage.buttonText = "Show Labels";
      }
    }

    return { mapImage, changeMap, title };
  }
};
</script>

<style lang="scss" scoped>
h1 {
  background: #066d04;
  color: #ffffff;
}
#map {
  background: url("../assets/necromunda-underhive-bg.jpg") no-repeat center
    bottom;
  background-size: cover;
  padding-bottom: 1em;

  .map-btn {
    padding: 0.5em 1em;
  }
  img {
    max-width: 100%;
    margin-top: 2em;
    cursor: pointer;
  }
}
.fade-in {
  animation: fadeIn ease 5s;
  -webkit-animation: fadeIn ease 5s;
  -moz-animation: fadeIn ease 5s;
  -o-animation: fadeIn ease 5s;
  -ms-animation: fadeIn ease 5s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@media screen and (min-width: 640px) {
  .container-fluid {
    .map-btn {
      padding: 0.5em 1em;
      position: relative;
      bottom: 3rem;
      font-weight: bold;
    }
  }
}
</style>
