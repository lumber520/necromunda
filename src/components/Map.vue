<template>
  <img
    src="../assets/necromunda-map-main.jpg"
    height="803"
    width="1335"
    alt=""
  />
  <img
    src="../assets/necromunda-map-main-lables.jpg"
    height="803"
    width="1335"
    alt=""
  />
  <AppButton> Show Labels </AppButton>
  <AppButton> Hide Labels </AppButton>
</template>

<script>
import { ref } from "vue";
import AppButton from "./AppButton";
export default {
  components: {
    AppButton
  },
  name: "Map",
  setup() {
    const test = ref("test");

    return { test };
  }
};
</script>

<style scoped></style>
