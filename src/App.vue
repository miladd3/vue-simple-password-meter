<template>
  <div id="app">
    <input type="password" v-model="pass">
    <password-meter :password="pass" />
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
  }
});
</script>

<style>
</style>
