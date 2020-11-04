<template>
  <img alt="" :src="gangImg" />
  <p class="game-intro">{{ Intro }}</p>
</template>

<script>
export default {
  name: "Games",
  props: ["gangImg", "Intro"]
};
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
.game-intro {
  color: #ffff;
  padding: 1rem;
  text-align: left;
}
</style>
