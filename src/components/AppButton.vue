<template>
  <button><slot></slot></button>
</template>

<script>
export default {
  name: "AppButton"
};
</script>

<style lang="scss" scoped>
button {
  text-align: center;
  color: #ffffff;
  margin: auto;
  background: #a49678c7;
  padding: 2em;
  border: none;
  transition: ease all 0.5ms;
  box-shadow: 0 2px 42px -2px black;
  border-radius: 0.3em;
  &:hover,
  &:active {
    transform: scale(1.1);
    background: darkgreen;
    border: none;
  }
}
</style>
