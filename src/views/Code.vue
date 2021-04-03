<template>
  <div class="app">
    <div class="container">
      <AddCode/>
      <Code/>
    </div>
  </div>
</template>

<script>
import Code from '@/components/question/code.vue';
import AddCode from '@/components/question/addCode.vue';

export default {
  components: {
    Code,
    AddCode
  },
};
</script>
