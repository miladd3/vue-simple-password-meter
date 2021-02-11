<template>
  <div id="app">
    <input type="password" v-model="pass">
    <password-meter :password="pass" @score="onScore" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PasswordMeter from './password-meter.vue'
export default defineComponent({
  name: 'App',
  components: {
    PasswordMeter
  },
  data() {
    return {
      pass: ''
    }
  },
  methods: {
    onScore(score: { score: number, strength: string }) {
      console.log(score)
    }
  }
});
</script>

<style>
</style>
