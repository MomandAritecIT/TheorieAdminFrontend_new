<template>
  <div class="app">
    <div class="container">
      <AddCode/>
      <Code/>
    </div>
  </div>
</template>

<script>
import Code from '@/components/code/code.vue';
import AddCode from '@/components/code/addCode.vue';

export default {
  components: {
    Code,
    AddCode
  },
};
</script>
