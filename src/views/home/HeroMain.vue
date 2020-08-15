<template>
  <div class="hero-main">
    <img :src="image" alt="" ref="theImage" />

    <div class="content-box">
      <div class="logo">
        <img :src="logo" alt="vue simple password meter" />
      </div>

      <hero-main-input v-model="password" />
      <password-meter :password="password" @score="onScore" />
    </div>
  </div>
</template>

<script>
import heroImage from '@/assets/hero-image.jpg'
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
.hero-main {
  height: calc(100vh - 60px);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    position: absolute;
    top: 0;
    left: 0;
  }

  &:after {
    content: '';
    background: rgba(0, 0, 0, 0.4);
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
  }
}
</style>
