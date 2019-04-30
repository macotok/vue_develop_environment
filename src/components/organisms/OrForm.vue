<template lang="pug">
  div
    table
      mo-input-text(
        labelName="ラベル1"
      )
      mo-input-text(
        labelName="ラベル1"
      )
    at-button(
    ) ボタン
</template>

<script>
import AtButton from '@/components/atoms/form/AtButton';
import MoInputText from '@/components/molecules/MoInputTetxt';

export default {
  components: {
    AtButton,
    MoInputText,
  },
};
</script>
