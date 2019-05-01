<template lang="pug">
  div
    at-title-h2(
    ) 見出し
    at-text(
    ) テキスト
</template>

<script>
import AtText from '@/components/atoms/text/AtText';
import AtTitleH2 from '@/components/atoms/text/AtTitleH2';

export default {
  components: {
    AtText,
    AtTitleH2,
  },
};
</script>
