<template>
  <div id="app">
    <div class="wrap">
      <h1>Vue Simple Password Meter</h1>
      <p>
        <b>Vue Simple Passwod Meter</b> is a simple password checker written in
        vanilla js and extremly lightweight
      </p>

      <form>
        <label for="password">Password</label>
        <input id="password" type="password" v-model="value" />
        <small v-if="score === 0">use better password</small>
        <password-meter :password="value" @score="onScore" />
      </form>
    </div>
  </div>
</template>

<script>
import passwordMeter from './password-meter.vue'

export default {
  name: 'app',
  components: {
    passwordMeter
  },
  data () {
    return {
      value: null,
      score: null
    }
  },
  methods: {
    onScore ({ score, strength }) {
      // eslint-disable-next-line no-console
      console.log(score, strength)

      this.score = score
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  padding: 0;
}

* {
  padding: 0;
  margin: 0;
}

#app .wrap {
  max-width: 450px;
  margin: auto;
}

#app .wrap input {
  border: 1px solid #ccc;
  padding: 5px 10px;
  border-radius: 3px;
  width: 100%;
  box-sizing: border-box;
}

#app p {
  margin: 16px 0;
  color: #777;
  line-height: 1.5;
}

#app p b {
  color: #333333;
}

#app form {
  margin: 0 25px;
}

#app form label {
  display: block;
  font-size: 12px;
  text-align: left;
  margin-bottom: 6px;
}
</style>
