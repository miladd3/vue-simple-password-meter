<template>
  <div id="app">
    <home-page />
  </div>
</template>

<script>
import HomePage from './views/home/HomePage'
export default {
  name: 'App',
  components: { HomePage }
}
</script>

<style lang="scss">
@import 'src/styles/index';
</style>
