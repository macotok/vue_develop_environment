<template lang="pug">
  div
    slot(
      :inputText="inputText"
    )
</template>

<script>
export default {
  props: {
    actionType: {
      type: String,
      default: '',
      required: true,
    },
    name: {
      type: String,
      default: '',
      required: true,
    },
  },
  methods: {
    inputText(e) {
      return this.$store.dispatch(this.actionType, {
        value: e.target.value,
        name: this.name,
      });
    },
  },
};
</script>
