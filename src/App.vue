<template lang="pug">
  div
    at-title-h1(
    ) 大見出し
    mo-title-block(
    )
    mo-input-text(
    )
    at-button(
    ) ボタン
</template>

<script>
import AtButton from '@/components/atoms/form/AtButton';
import AtTitleH1 from '@/components/atoms/text/AtTitleH1';
import MoInputText from '@/components/molecules/MoInputTetxt';
import MoTitleBlock from '@/components/molecules/MoTitleBlock';

export default {
  components: {
    AtButton,
    AtTitleH1,
    MoInputText,
    MoTitleBlock,
  },
};
</script>

<style lang="scss">
  div {
    color: gray;
  }
</style>
