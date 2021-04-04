<template>
  <div class="app">
    <div class="container">
      <h1>Vragen toevoegen</h1>
      <v-card class="pa-5 mx-auto my-5" width="500px">
        <p>Selecteer onderdeel:</p>
        <v-form>
          <v-col class="d-flex" cols="12" sm="6">
            <v-select
              v-model="selectedSubject"
              :items="subjects"
              label="Onderdeel"
              solo
            ></v-select>
          </v-col>
        </v-form>
      </v-card>

      <PolarQuestionForm v-if="selectedSubject === 'Ja/Nee'" />
      <HazardPerceptionForm v-if="selectedSubject === 'Gevaarherkenning'" />
    </div>
  </div>
</template>

<script>
import PolarQuestionForm from "@/components/question/form/polarQuestion";
import HazardPerceptionForm from "@/components/question/form/hazardPerception";
export default {
  components: {
    PolarQuestionForm,
    HazardPerceptionForm
  },
  data() {
    return {
      subjects: ["Meerkeuze", "Ja/Nee", "Gevaarherkenning"],
      selectedSubject: "",
    };
  },
};
</script>