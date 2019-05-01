<template lang="pug">
  te-sample(
    :label01="label01"
    :label02="label02"
  )
</template>

<script>
import { mapState } from 'vuex';
import TeSample from '@/components/templates/TeSample';

export default {
  components: {
    TeSample,
  },
  computed: {
    ...mapState({
      label01(state) {
        return state.label01;
      },
      label02(state) {
        return state.label02;
      },
    }),
  },
};
</script>
