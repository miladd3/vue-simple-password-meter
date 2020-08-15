<template>
  <input
    class="hero-main-input"
    type="password"
    v-model="localVal"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  name: 'HeroMainInput',
  props: {
    value: null,
    placeholder: {
      type: String,
      default: 'Type your password'
    }
  },
  computed: {
    localVal: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style scoped>
input.hero-main-input {
  height: 50px;
  padding: 0 1rem;
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  text-align: center;
  border: none;
  border-radius: 2px;
  background-color: #ffffff;
}
</style>
