<template>
  <button><slot></slot></button>
</template>

<script>
export default {
  name: "AppButton"
};
</script>

<style scoped>
button {
  text-align: center;
  color: #ffffff;
  margin: auto;
  background: darkgreen;
  padding: 2em;
}
</style>
