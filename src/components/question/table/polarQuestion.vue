<template>
  <div>
    <h1>This is the Polar Question page</h1>
    <div v-if="authenticated">
      <div class="questions">
        <div
          v-for="polarQuestion in allQuestions"
          :key="polarQuestion.id"
          class="question"
        >
          <div>
            Vraag: {{ polarQuestion.question }} <br />
            antwoord: {{ polarQuestion.is_correct }} <br />
            <v-img
              max-width="250"
              v-bind:src="
                'http://localhost:8000/storage/' + polarQuestion.image
              "
            ></v-img>
            <a @click="deleteQuestion(polarQuestion.id)">delete</a>
            <br /><br />
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
    ...mapActions(["fetchQuestions", "deleteQuestion"
    ]),
  },
  computed: mapGetters(["allQuestions", "Auth/authenticated"]),
  created() {
    this.fetchQuestions();
  },
};
</script>
