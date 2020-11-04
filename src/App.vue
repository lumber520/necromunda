<template>
  <NavLinks />

  <transition name="moveInUp">
    <router-view />
  </transition>
</template>
<script>
import { ref } from "vue";
import NavLinks from "./components/NavLinks";
export default {
  name: "Home",
  setup() {
    const gang = ref("Gangs");
    const games = ref("Games Played");
    const standings = ref("Current Standings");
    const mostWanted = ref("Most Wanted");
    return { gang, games, mostWanted, standings };
  },
  components: {
    NavLinks
  }
};
</script>
<style lang="scss">
#app {
  font-family: "Itim", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  h1 {
    padding: 0.9rem 0;
    text-align: center;
    font-weight: 900;
    font-size: 2em;
    margin: 0;
  }
  a {
    text-decoration: none;
  }
  p {
    font-size: 1.1rem;
  }
}
</style>
