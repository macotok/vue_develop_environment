<template lang="pug">
  div
    table
      mo-input-text(
      ) ラベル1
      mo-input-text(
      ) ラベル2
    at-button(
    )
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
