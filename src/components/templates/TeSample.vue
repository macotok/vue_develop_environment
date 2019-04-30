<template lang="pug">
  div
    or-header(
      title="大見出し"
    )
    mo-title-block(
    )
    or-form(
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
};
</script>
