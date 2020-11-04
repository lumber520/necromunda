<template>
  <h1>
    {{ title }}
  </h1>
  <div id="gangs" class="container-fluid">
    <div class="row justify-content-center">
      <div v-for="gang in gangDetails.details" :key="gang.id" class="col-12">
        <div class="container-fluid">
          <div class="row justify-content-center align-items-center">
            <div class="col-12 col-md-6 col-lg-5" :class="gang.orderImg">
              <img :src="gang.logo" alt="" />
            </div>
            <div
              class="col-12 col-md-5 col-lg-5 info-block"
              :class="gang.orderText"
            >
              <h3>{{ gang.gangName }}</h3>
              <p>{{ gang.descr }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "Gangs",
  setup: function() {
    const title = ref("Gangs");
    const gangDetails = reactive({
      details: [
        {
          logo: require("../assets/house-cawoor.png"),
          gangName: "Cawoor",
          descr: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.`,
          id: 1
        },
        {
          logo: require("../assets/house-vansaar.png"),
          gangName: "Vansaar",
          descr: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.`,
          id: 2,
          orderImg: "order-lg-2",
          orderText: "order-lg-1"
        },
        {
          logo: require("../assets/house-enforcers.png"),
          gangName: "Enforcers",
          descr: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.`,
          id: 3
        },
        {
          logo: require("../assets/house-goliath.png"),
          gangName: "Goliath",
          descr: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.`,
          id: 4,
          orderImg: "order-lg-2",
          orderText: "order-lg-1"
        },
        {
          logo: require("../assets/house-drlock.png"),
          gangName: "Drlock",
          descr: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.`,
          id: 5
        }
      ]
    });

    return { gangDetails, title };
  }
};
</script>

<style lang="scss" scoped>
h1 {
  background: #0438ad;
  color: #ffffff;
}
#gangs {
  .container-fluid {
    padding: 0;
    .row {
      img {
        max-width: 18rem;
        margin: 2em 0 0;
      }
      .info-block {
        background: url("../assets/splat-1.svg") no-repeat center;
        background-size: cover;
        padding: 1.5em;
        margin: 2em 0;
        box-shadow: 5px 5px rgba(98, 2, 2, 0.4), 10px 10px rgba(98, 2, 2, 0.3),
          15px 15px rgba(98, 2, 2, 0.2), 20px 20px rgba(98, 2, 2, 0.1),
          25px 25px rgba(98, 2, 2, 0.05);
        transition: ease-in-out 1s;
        border: 1px solid #f9f7f7;

        &:hover,
        &:active {
          box-shadow: 5px 5px rgba(0, 98, 90, 0.4),
            10px 10px rgba(0, 98, 90, 0.3), 15px 15px rgba(0, 98, 90, 0.2),
            20px 20px rgba(0, 98, 90, 0.1), 25px 25px rgba(0, 98, 90, 0.05);
        }

        h3 {
          color: #054586;
          font-weight: 900;
          text-align: left;
        }

        p {
          text-align: left;
          margin: 0;
        }
      }
    }
  }
}
</style>
