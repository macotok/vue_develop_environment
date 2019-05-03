<template lang="pug">
  header
    at-title-h1(
    ) {{ title }}
</template>

<script>
import AtTitleH1 from '@/components/atoms/text/AtTitleH1';

export default {
  components: {
    AtTitleH1,
  },
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
  },
};
</script>
