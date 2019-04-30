<template lang="pug">
  div
    at-title-h1(
    ) 大見出し
    at-title-h2(
    ) 見出し
    at-text(
    ) テキスト
    at-label(
    ) ラベル
    at-text-input(
    )
    at-button(
    ) ボタン
</template>

<script>
import AtButton from '@/components/atoms/form/AtButton';
import AtLabel from '@/components/atoms/form/AtLabel';
import AtText from '@/components/atoms/text/AtText';
import AtTextInput from '@/components/atoms/form/AtTextInput';
import AtTitleH1 from '@/components/atoms/text/AtTitleH1';
import AtTitleH2 from '@/components/atoms/text/AtTitleH2';

export default {
  components: {
    AtButton,
    AtLabel,
    AtText,
    AtTextInput,
    AtTitleH1,
    AtTitleH2,
  },
};
</script>

<style lang="scss">
  div {
    color: gray;
  }
</style>
