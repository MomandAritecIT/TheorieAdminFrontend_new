<template>
  <div class="app">
    <div class="container">
      <h1>Vragen</h1>
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

      <PolarQuestionTable v-if="selectedSubject === 'Ja/Nee'" />
      <HazardPerceptionTable v-if="selectedSubject === 'Gevaarherkenning'" />
    </div>
  </div>
</template>

<script>
import PolarQuestionTable from "@/components/question/table/polarQuestion";
import HazardPerceptionTable from "@/components/question/table/hazardPerception";
export default {
  components: {
    PolarQuestionTable,
    HazardPerceptionTable,
  },
  data() {
    return {
      subjects: ["Meerkeuze", "Ja/Nee", "Gevaarherkenning"],
      selectedSubject: "",
    };
  },
};
</script>