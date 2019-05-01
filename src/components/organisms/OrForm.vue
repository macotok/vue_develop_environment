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
