<template>
  <div>
    <h1>This is the Gevaarherkenning page</h1>
    <div v-if="authenticated">
      <div class="questions">
        <div
          v-for="hazardPerception in allQuestions"
          :key="hazardPerception.id"
          class="question"
        >
          <div>
            Vraag: {{ hazardPerception.question }} <br />
            antwoord: {{ hazardPerception.answer }} <br />
            <v-img
              max-width="250"
              v-bind:src="
                'https://api44.aritecit.nl/storage/' + hazardPerception.image
              "
            ></v-img>
            <a @click="deleteQuestion(hazardPerception.id)">delete</a>
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
    ...mapActions({
      fetchQuestions: "HazardPerception/fetchQuestions", 
      deleteQuestion: "HazardPerception/deleteQuestion"
    }),
  },
  computed: mapGetters({
    allQuestions: "HazardPerception/allQuestions", 
    authenticated: "Auth/authenticated"
  }),
  created() {
    this.fetchQuestions();
  },
};
</script>
