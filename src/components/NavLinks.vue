<template>
  <div id="nav" class="container-fluid">
    <div class="">
      <div class="row justify-content-center align-items-center">
        <div class="col-12 col-lg-3">
          <router-link :to="{ name: 'Home' }">
            <img
              src="../assets/necromunda-logo.png"
              height="42"
              width="188"
              alt=""
          /></router-link>
        </div>
        <div class="col-3 col-md-2 col-lg-1">
          <router-link :to="{ name: 'Home' }">
            Home
            <hr
          /></router-link>
        </div>
        <div class="col-3 col-md-2 col-lg-1">
          <router-link :to="{ name: 'Gangs' }"
            >Gangs
            <hr
          /></router-link>
        </div>
        <div class="col-3 col-md-3 col-lg-1">
          <router-link :to="{ name: 'GamesPlayed' }"
            >Games
            <hr
          /></router-link>
        </div>
        <div class="col-3 col-md-2 col-lg-1">
          <router-link :to="{ name: 'MostWanted' }"
            >Wanted
            <hr
          /></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavLinks"
};
</script>

<style lang="scss" scoped>
#nav {
  margin: 1em auto;
  background: #ffffff;
  position: sticky;
  padding-top: 1em;
  padding-bottom: 1em;
  top: 0;
  z-index: 3000;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    hr {
      max-width: 3em;
      border-top: 1px solid grey;
      padding: 0;
      margin: 0.1em auto;
    }
    img {
      margin-bottom: 1em;
    }
    &.router-link-exact-active {
      color: #cb5b3a;
      font-weight: 900;
      hr {
        max-width: 2em;
        border-top: 3px solid #42b983;
        padding: 0;
      }
    }
  }
}
.moveInUp-enter-active {
  animation: fadeIn 2s ease-in;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
.moveInUp-leave-active {
  animation: moveInUp 0.3s ease-in;
}
@keyframes moveInUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-400px);
  }
}
</style>
