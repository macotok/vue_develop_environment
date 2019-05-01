<template lang="pug">
  div
    table
      mo-input-text(
        actionType='action01'
      ) ラベル1
      mo-input-text(
        actionType='action02'
      ) ラベル2
    at-button(
    )
    at-text(
    ) ラベル1: {{ label01 }}
    at-text(
    ) ラベル2: {{ label02 }}
</template>

<script>
import AtButton from '@/components/atoms/form/AtButton';
import AtText from '@/components/atoms/text/AtText';
import MoInputText from '@/components/molecules/MoInputTetxt';

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
    },
    label02: {
      type: String,
      default: '',
    },
  },
};
</script>
