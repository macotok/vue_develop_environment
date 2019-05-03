<template lang="pug">
  tr
    th
      at-label(
      )
        slot
    td
      at-text-input(
        @input-text='eventHandle',
      )
</template>

<script>
import AtLabel from '@/components/atoms/form/AtLabel';
import AtTextInput from '@/components/atoms/form/AtTextInput';

export default {
  components: {
    AtLabel,
    AtTextInput,
  },
  props: {
    actionType: {
      type: String,
      default: '',
      required: true,
    },
  },
  methods: {
    eventHandle(value) {
      return this.$store.dispatch(this.actionType, value);
    },
  },
};
</script>
