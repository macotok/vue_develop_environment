<template lang="pug">
  input(
    type="text"
    @input="inputText"
  )
</template>

<script>
export default {
  methods: {
    inputText(e) {
      this.$emit('input-text', e);
    },
  },
};
</script>
