# vue-simple-password-meter

**Vue Simple Password Meter** is a simple password checker written in vanilla js and extremely lightweight (** less than 1kb minified + Gzipped**)

#### This is `Vue 3.*` compatible version. If you are using `Vue 2.*` [Click Here](https://github.com/miladd3/vue-simple-password-meter/tree/vue-2)

## Demo

[Demo](https://vspm-next.herokuapp.com/)

## Install

`npm install vue-simple-password-meter --save`

## Usage

Simply use v-model and send it to the component using password prop

```vue
<template>
  <div id="app">
    <label>Password</label>
    <input type="password" v-model="password" />
    <password-meter :password="password" />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import PasswordMeter from 'vue-simple-password-meter';

export default defineComponent({
  components: {
    PasswordMeter,
  },
  setup() {
    const password = ref('');

    return {
      password,
    };
  },
});
</script>
```

### Customize using css

If you want to customize the bar its really simple with some easy css you can customize it

Overwrite these css styles globally and change each state color and style

```css
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
```


## Events

You can use event `score` to use scored number between `0` to `4` that scores password from risky to secure with 4 is a secure password and 0 is risky and between.

You can use this as a form verification tool

See below example for more detail

```vue
<template>
  <div id="app">
    <label>Password</label>
    <input type="password" v-model="password" />
    <span v-if="score === 0">Use better password</span>
    <password-meter @score="onScore" :password="password" />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import PasswordMeter from "vue-simple-password-meter";

export default defineComponent({
  name: "App",
  components: {
    PasswordMeter,
  },
  setup() {
    const password = ref("");
    const score = ref(null);

    const onScore = (payload) => {
      console.log(payload.score); // from 0 to 4
      console.log(payload.strength); // one of : 'risky', 'guessable', 'weak', 'safe' , 'secure'
      score.value = payload.score;
    };

    return {
      password,
      onScore,
      score,
    };
  },
});
</script>
```

## Contributing

If you want to contribute to this project simply fork it and clone it then run
`npm i`
in the root of the project, then run
`npm run serve`
to run development server.

## Motivation

Since Every other components and libraries mostly were using [zxcvbn](https://github.com/dropbox/zxcvbn) was 799.5kb minified and 388.3kb minified and Gzipped, so I decided to make simpler approach and use regex instead of dictionary for validating.

### Licence and cast

MIT Licence

by [Milad Dehghan](http://dehghan.net)
