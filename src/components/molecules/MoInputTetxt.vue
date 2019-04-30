<template lang="pug">
  tr
    th
      at-label(
      ) {{ labelName }}
    td
      at-text-input(
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
    labelName: {
      type: String,
      default: '',
    },
  },
};
</script>
