<template lang="pug">
  table
    tr
      th
        at-label(
        ) ラベル
      td
        at-text-input(
        )
    tr
      th
        at-label(
        ) ラベル
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
  }
}
</script>
