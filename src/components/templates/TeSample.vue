<template lang="pug">
  div
    or-header(
      title="大見出し"
    )
    mo-title-block
    or-form(
      :label01="label01"
      :label02="label02"
    )
</template>

<script>
import MoTitleBlock from '@/components/molecules/MoTitleBlock';
import OrForm from '@/components/organisms/OrForm';
import OrHeader from '@/components/organisms/OrHeader';

export default {
  components: {
    MoTitleBlock,
    OrForm,
    OrHeader,
  },
  props: {
    label01: {
      type: String,
      default: '',
      required: true,
    },
    label02: {
      type: String,
      default: '',
      required: true,
    },
  },
};
</script>
