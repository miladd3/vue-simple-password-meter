<template>
  <div class="hero-main">
    <img class="main-image" :src="image" alt="" ref="theImage" />

    <div class="content-box">
      <div class="logo">
        <img :src="logo" alt="vue simple password meter" />
      </div>

      <h1 class="main-title">Vue Simple Password Meter</h1>
      <hero-main-input
        v-model="password"
        placeholder="Type a Strong Password"
      />
      <password-meter :password="password" @score="onScore" />
    </div>

    <a class="learn-more" href="#readme" v-smooth-scroll>
      <img :src="mouseDown" />
    </a>
  </div>
</template>

<script>
import heroImage from '@/assets/hero-image.jpg'
import mouseDown from '@/assets/mouse-down.svg'
import logoWhite from '@/assets/logo-w.svg'
import HeroMainInput from './HeroMainInput'
import passwordMeter from 'vue-simple-password-meter'
import Pixelate from 'pixelate'

// eslint-disable-next-line no-unused-vars
const PIXELATE_PER_SCORE = {
  0: 0.98,
  1: 0.93,
  2: 0.9,
  3: 0.85,
  4: 0
}

export default {
  name: 'HeroMain',
  components: { HeroMainInput, passwordMeter },
  data() {
    return {
      image: heroImage,
      logo: logoWhite,
      mouseDown,
      password: null,
      pixelate: null
    }
  },
  mounted() {
    if (this.$refs.theImage) {
      // eslint-disable-next-line no-unused-vars
      this.pixelate = new Pixelate(this.$refs.theImage, {
        amount: 0.98 // default: 0, pixelation percentage amount (range from 0 to 1)
      })
    }
  },
  methods: {
    onScore({ score }) {
      const pixelateValue = PIXELATE_PER_SCORE[score]

      this.pixelate?.setAmount(pixelateValue).render()
    }
  }
}
</script>

<style scoped lang="scss">
@use '@/styles/_mq.scss' as *;

.hero-main {
  height: calc(100vh - 60px);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  > .main-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

    @include mq(desktop) {
      height: auto;
      object-fit: contain;
    }
  }

  &:after {
    content: '';
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 10;
  }

  .content-box {
    position: absolute;
    z-index: 20;
    color: #ffffff;
    max-width: 450px;
    width: 100%;
    text-align: center;

    > .logo {
      display: block;
    }

    > .main-title {
      font-size: 2rem;
      margin: 1rem 0 2rem 0;
    }
  }

  .learn-more {
    position: absolute;
    z-index: 20;
    bottom: 20px;
  }
}
</style>
