<template>
  <div class="po-password-strength-bar" :class="passwordClass">
    {{ passwordStrength }}
  </div>
</template>

<script>
export default {
  name: "password-meter",
  props: {
    password: String
  },
  computed: {
    passwordStrength() {
      if (this.password) return this.checkPassword(this.password);
      return null;
    },
    passwordClass() {
      return [
        {
          scored: this.passwordStrength !== null && this.password
        },
        {
          risky: this.passwordStrength === 0,
          guessable: this.passwordStrength === 1,
          weak: this.passwordStrength === 2,
          safe: this.passwordStrength === 3,
          secure: this.passwordStrength === 4
        }
      ];
    }
  },
  methods: {
    checkPassword(pass) {
      let score = 0;
      let length = 0;
      let specialChar = 0;
      let caseMix = 0;
      let numCharMix = 0;

      let specialCharRegex = /[^A-Za-z0-9]/g;
      let lowercaseRegex = /(.*[a-z].*)/g;
      let uppercaseRegex = /(.*[A-Z].*)/g;
      let numberRegex = /(.*[0-9].*)/g;
      let repeatCharRegex = /(\w)(\1+\1+\1+\1+)/g;

      let hasSpecialChar = specialCharRegex.test(pass);
      let hasLowerCase = lowercaseRegex.test(pass);
      let hasUpperCase = uppercaseRegex.test(pass);
      let hasNumber = numberRegex.test(pass);
      let hasRepeatChars = repeatCharRegex.test(pass);

      if (pass.length > 4) {
        if ((hasLowerCase || hasUpperCase) && hasNumber) {
          numCharMix = 1;
        }

        if (hasUpperCase && hasLowerCase) {
          caseMix = 1;
        }

        if ((hasLowerCase || hasUpperCase || hasNumber) && hasSpecialChar) {
          specialChar = 1;
        }
        // eslint-disable-next-line no-console
        console.log(pass.length);

        if (pass.length > 8) {
          length = 1;
        }

        if (pass.length > 12 && !hasRepeatChars) {
          length = 2;
        }

        if (pass.length > 25 && !hasRepeatChars) {
          length = 3;
        }

        score = length + specialChar + caseMix + numCharMix;

        if (score > 4) {
          score = 4;
        }
      }

      return score;
    }
  }
};
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
}

.po-password-strength-bar.guessable {
  background-color: #fb964d;
}

.po-password-strength-bar.weak {
  background-color: #fdd244;
}

.po-password-strength-bar.safe {
  background-color: #b0dc53;
}

.po-password-strength-bar.secure {
  background-color: #35cc62;
}
</style>
