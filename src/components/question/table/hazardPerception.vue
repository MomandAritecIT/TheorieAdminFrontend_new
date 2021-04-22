<template>
  <div>
    <h1>This is the Gevaarherkenning page</h1>
    <div v-if="authenticated">
      <div class="questions">
        <v-data-table
          :headers="headers"
          :items="allQuestions"
          :items-per-page="10"
          class="elevation-1"
        >
          <template v-slot:[`item.answer`]="{ item }">
            <span v-if="item.answer == 1">Remmen</span>
            <span v-if="item.answer == 2">Gas los</span>
            <span v-else>Niets</span>
          </template>
          <template v-slot:[`item.image`]="{ item }">
            <v-img
              width="100"
              v-bind:src="'https://api44.aritecit.nl/storage/' + item.image"
            />
          </template>
          <template v-slot:[`item.options`]="{ item }">
            <v-icon small class="mr-2" @click="editItem(item.id)">
              mdi-pencil
            </v-icon>
            <v-icon small class="mr-2" @click="deleteQuestion(item.id)">
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      headers: [
        { text: "Rij", value: "id" },
        { text: "Vraag", value: "question" },
        { text: "Antwoord", value: "answer" },
        { text: "Foto", value: "image" },
        { text: "Motivatie", value: "motivation" },
        { text: "Opties", value: "options" },
      ],
    };
  },
  methods: {
    ...mapActions(["fetchQuestions", "deleteQuestion"]),
  },
  computed: mapGetters({
    allQuestions: "allQuestions",
    authenticated: "Auth/authenticated",
  }),
  created() {
    this.fetchQuestions(2);
  },
};
</script>
