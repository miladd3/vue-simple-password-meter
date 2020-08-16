<template>
  <div class="page-home">
    <hero-main />
    <read-me />
  </div>
</template>

<script>
import HeroMain from './HeroMain'
import ReadMe from './ReadMe'
export default {
  name: 'HomePage',
  components: { ReadMe, HeroMain }
}
</script>

<style scoped></style>
