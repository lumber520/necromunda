<template>
  <h1>{{ title }}</h1>
  <div class="most-wanted">
    <transition-group name="animated" tag="div">
      <div class="fade-in" v-for="i in [currentIndex]" :key="i">
        <img @click="next" :src="currentImg" alt="" />
      </div>
    </transition-group>
    <a class="prev" @click="prev" href="#"> &#60; </a>
    <a class="next" @click="next" href="#"> &#62;</a>
  </div>
</template>
<script>
export default {
  components: {},
  name: "Slider",
  data() {
    return {
      images: [
        require("../assets/wanted-1.png"),
        require("../assets/wanted-2.png"),
        require("../assets/wanted-3.png"),
        require("../assets/wanted-4.png"),
        require("../assets/wanted-5.png")
      ],
      timer: null,
      currentIndex: 0,
      title: "Most Wanted"
    };
  },

  methods: {
    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>
<style lang="scss" scoped>
h1 {
  background: #3e333b;
  color: #ffffff;
}
.most-wanted {
  background: url("../assets/brickwall.jpg") no-repeat;
  background-size: cover;
  padding: 5.45% 0;
  div.animated-enter-active:nth-of-type(2).animated-enter-to:nth-of-type(2) {
    display: none;
  }
  .fade-in {
    animation: fadeIn ease 1s;
    -webkit-animation: fadeIn ease 1s;
    -moz-animation: fadeIn ease 1s;
    -o-animation: fadeIn ease 1s;
    -ms-animation: fadeIn ease 1s;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes fadeIn {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes fadeIn {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  @-ms-keyframes fadeIn {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  img {
    max-width: 30em;
    width: 100%;
    transition: ease all 1s;
    cursor: pointer;
    &:hover,
    &:active {
      transform: scale(1.1);
    }
  }

  .prev,
  .next {
    cursor: pointer;
    position: relative;
    top: -2em;
    width: auto;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 1.5em;
    transition: 1s ease;
    text-decoration: none;
    user-select: none;
  }

  .next {
    right: 0;
  }

  .prev {
    left: 0;
  }

  .prev:hover,
  .next:hover {
    color: green;
  }
}
</style>
