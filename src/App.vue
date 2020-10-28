<template>
  <div id="nav">
    <router-link :to="{ name: 'Home' }">
      <img src="./assets/necromunda-logo.png" height="42" width="188" alt=""
    /></router-link>
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'Report' }">Full Reports</router-link>
    <router-link to="#gang">gangs</router-link>
  </div>
  <router-view />
</template>
<script>
import { ref } from "vue";

export default {
  name: "Home",
  setup() {
    const gang = ref("Gangs");
    const games = ref("Games Played");
    const standings = ref("Current Standings");
    const mostWanted = ref("Most Wanted");
    return { gang, games, mostWanted, standings };
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
