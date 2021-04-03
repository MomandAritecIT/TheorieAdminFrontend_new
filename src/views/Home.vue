<template>
  <div class="app">
    <div class="container">
      <AddQuestion/>
      <Question/>
    </div>
  </div>
</template>

<script>
import Question from '@/components/question/question.vue';
import AddQuestion from '@/components/question/addQuestion.vue';

export default {
  components: {
    Question,
    AddQuestion
  },
};
</script>
