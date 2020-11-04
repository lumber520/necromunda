<template>
  <h1>{{ title }}</h1>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div
        class="col-12 col-md-10 col-xl-5 game-box"
        v-for="game in gameDetails.details"
        :key="game.id"
      >
        <router-link
          :to="{
            name: 'Report',
            params: { gameId: game.id },
            props: { descr: game.descr }
          }"
        >
          <games :gangImg="game.img" :Intro="game.descr" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Games from "../components/Games";
import { ref, reactive } from "vue";
export default {
  name: "GamesPlayed",
  components: {
    Games
  },
  setup: function() {
    const title = ref("Games Played");
    const gameDetails = reactive({
      details: [
        {
          img: require("../assets/game-play-1.jpg"),
          descr: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.`,
          id: 1
        },
        {
          img: require("../assets/game-play-2.jpg"),
          descr:
            "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.",
          id: 2,
          orderImg: "order-md-2",
          orderText: "order-md-1"
        },
        {
          img: require("../assets/game-play-3.jpg"),
          descr:
            "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.",
          id: 3
        },
        {
          img: require("../assets/game-play-2.jpg"),
          descr:
            "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.",
          id: 4,
          orderImg: "order-md-2",
          orderText: "order-md-1"
        },
        {
          img: require("../assets/game-play-1.jpg"),
          descr:
            "Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.",
          id: 5
        }
      ]
    });

    return { gameDetails, title };
  }
};
</script>

<style lang="scss" scoped>
h1 {
  background: #0f60c9;
  color: #ffffff;
  padding: 1.5rem 0;
  text-align: center;
  font-weight: 900;
}
.container-fluid {
  .row {
    .game-box {
      margin: 0.5em 0.5em 1em;
      position: relative;
      font-size: 1.1rem;
      transition: 1s box-shadow;
      display: flex;
      z-index: 1000;

      &::before,
      &::after {
        background-image: linear-gradient(-180deg, #ee3437 0%, #ef2225 97%);
        content: "";
        height: 100%;
        position: absolute;
        transition: all 0.2s;
        transition-delay: 0.2s;
        transform: translateY(0px) translateX(0px);
        width: 100%;
        z-index: -5;
      }
      &::after {
        background-image: linear-gradient(0deg, #272725 0%, #484843 97%);
      }
      &:hover {
        animation-name: hoverPop;
        animation-duration: 0.4s;
        animation-fill-direction: forward;

        img {
          box-shadow: 2px 2px 4px 0px rgba(10, 12, 15, 0.27);
          box-shadow: 0px 0px 30px 0px rgba(10, 12, 15, 0.27);
        }
        &::before {
          animation: slick-hover-2 3s 0.4s linear infinite;
          transform: translateY(-20px) translateX(-20px);
        }
        &::after {
          animation: slick-hover 3s 0.4s linear infinite reverse;
          transform: translateY(20px) translateX(20px);
        }
      }
    }

    @keyframes hoverPop {
      0%,
      100% {
        transform: scale(1);
      }
      33% {
        transform: scale(1.05);
      }
      66% {
        transform: scale(0.9);
      }
    }

    @keyframes slick-hover {
      0.00% {
        transform: translateY(20px) translateX(20px);
      }
      16.67% {
        transform: translateY(-13px) translateX(-9px);
      }
      33.33% {
        transform: translateY(4px) translateX(12px);
      }
      50.00% {
        transform: translateY(20px) translateX(-20px);
      }
      66.67% {
        transform: translateY(-3px) translateX(8px);
      }
      83.33% {
        transform: translateY(-15px) translateX(-11px);
      }
      100.00% {
        transform: translateY(20px) translateX(20px);
      }
    }

    @keyframes slick-hover-2 {
      0.00% {
        transform: translateY(-20px) translateX(-20px);
      }
      16.67% {
        transform: translateY(3px) translateX(-5px);
      }
      33.33% {
        transform: translateY(18px) translateX(-10px);
      }
      50.00% {
        transform: translateY(-20px) translateX(20px);
      }
      66.67% {
        transform: translateY(15px) translateX(-4px);
      }
      83.33% {
        transform: translateY(-1px) translateX(15px);
      }
      100.00% {
        transform: translateY(-20px) translateX(-20px);
      }
    }
    .col,
    .col-12 {
      padding: 0;
    }
  }
}
@media only screen and (min-width 900px) {
  .container-fluid {
    .row {
      .game-box {
        background: red;
      }
    }
  }
}
</style>
