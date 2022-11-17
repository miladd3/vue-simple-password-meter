<template>
  <div class="po-password-strength-bar" :class="passwordClass"></div>
</template>

<script>
import { checkStrength, scorePassword } from './logic'

export default {
  name: 'password-meter',
  props: {
    password: String,
    lengthConfig: {
      type: [Object, undefined],
      default: undefined,
      validator(value) {
        if (undefined) return true
        return ['lvl1', 'lvl2', 'lvl3', 'lvl4'].every((i) => Object.prototype.hasOwnProperty.call(value, i))
      }
    }
  },
  computed: {
    passwordClass() {
      if (!this.password) {
        return null
      }
      const strength = checkStrength(this.password, this.lengthConfig)
      const score = scorePassword(this.password, this.lengthConfig)
      this.$emit('score', { score, strength })
      return {
        [strength]: true,
        scored: true,
      }
    }
  }
}
</script>

<style>
.po-password-strength-bar {
  border-radius: 2px;
  transition: all 0.2s linear;
  height: 5px;
  margin-top: 8px;
}

.po-password-strength-bar.risky {
  background-color: #f95e68;
  width: 10%;
}

.po-password-strength-bar.guessable {
  background-color: #fb964d;
  width: 32.5%;
}

.po-password-strength-bar.weak {
  background-color: #fdd244;
  width: 55%;
}

.po-password-strength-bar.safe {
  background-color: #b0dc53;
  width: 77.5%;
}

.po-password-strength-bar.secure {
  background-color: #35cc62;
  width: 100%;
}
</style>
