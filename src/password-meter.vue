<script lang="ts">
import { checkStrength, scorePassword } from './logic'

export default {
  name: 'PasswordMeter',
  props: {
    password: String
  },
  emits: ['score'],
  computed: {
    passwordClass(): object | null {
      if (!this.password) {
        return null
      }
      const strength = checkStrength(this.password)
      const score = scorePassword(this.password)
      this.$emit('score', { score, strength })
      return {
        [strength]: true,
        scored: true
      }
    }
  }
}

</script>

<template>
  <div class="po-password-strength-bar" :class="passwordClass" />
</template>

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
