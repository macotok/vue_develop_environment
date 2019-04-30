<template lang="pug">
  input(
    type="text"
    @input="inputText"
  )
</template>

<script>
export default {
  methods: {
    inputText() {
      console.log('input text');
    },
  },
};
</script>
