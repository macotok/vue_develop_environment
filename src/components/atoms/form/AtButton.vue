<template lang="pug">
  button(
    type="submit"
    @click="clickButton"
  )
    slot ログイン
</template>

<script>
export default {
  methods: {
    clickButton() {
      console.log('click button');
    },
  },
};
</script>
