<template>
  <div class="readme">
    <div class="container">
      <vue-showdown
        :markdown="readme"
        :options="{ ghCodeBlocks: true }"
        :extensions="[showdownHighlight]"
      />
    </div>
  </div>
</template>

<script>
import { VueShowdown } from 'vue-showdown'
import showdownHighlight from 'showdown-highlight'
import 'highlight.js/styles/default.css'
import readme from './README-src.md'

export default {
  name: 'ReadMe',
  data() {
    return { readme, showdownHighlight }
  },
  components: { VueShowdown },
  mounted() {
    // console.log(readme)
  }
}
</script>

<style lang="scss">
.readme {
  padding: 3rem 0;

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin-top: 2rem;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.2rem;
  }

  p {
    margin-bottom: 1rem;
    margin-top: 0.5rem;
  }

  code {
    background-color: #f2f2f2;
    font-family: Consolas, Monaco, Lucida Console, Liberation Mono,
      DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
  }
}
</style>
