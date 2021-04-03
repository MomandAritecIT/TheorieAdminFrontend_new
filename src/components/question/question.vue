<template>
  <div class="home">
    <h1>This is the home page</h1>
    <div v-if="authenticated">
      <div class="questions">
        <div v-for="question in allQuestions" :key="question.id" class="question">
          <div>
            id: {{ question.id }} <br />
            Title: {{ question.title }}
            <a @click="deleteQuestion(question.id)">delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["fetchQuestions", "deleteQuestion"]),
  },
  computed: mapGetters(["allQuestions", "authenticated"]),
  created() {
    this.fetchQuestions();
  },
};
</script>
