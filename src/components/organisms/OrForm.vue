<template lang="pug">
  div
    form
      table
        mo-input-text(
          name='label01'
          actionType='action01'
        ) ラベル1
        mo-input-text(
          name='label02'
          actionType='action01'
        ) ラベル2
      at-button
    at-text(
    ) ラベル1: {{ label01 }}
    at-text(
    ) ラベル2: {{ label02 }}
</template>

<script>
import AtButton from '@/components/atoms/form/AtButton';
import AtText from '@/components/atoms/text/AtText';
import MoInputText from '@/components/molecules/MoInputText';

export default {
  components: {
    AtButton,
    AtText,
    MoInputText,
  },
  props: {
    label01: {
      type: String,
      default: '',
      required: true,
    },
    label02: {
      type: String,
      default: '',
      required: true,
    },
  },
};
</script>
