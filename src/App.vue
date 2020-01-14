<template>
  <div id="app">
    <input type="text" v-model="value">
    <password-meter :password="value" />

  </div>
</template>

<script>
import passwordMeter from './password-meter.vue'

export default {
  name: 'app',
  components: {
    passwordMeter
  },
  data() {
    return {
      value: null
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
