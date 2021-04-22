<template>
  <div class="app">
    <div class="container">
      <h1 align="center">Vragen</h1>
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
      <MultipleQuestionTable v-if="selectedSubject === 'Meerkeuze'" />
    </div>
  </div>
</template>

<script>
import PolarQuestionTable from "@/components/question/table/polarQuestion";
import HazardPerceptionTable from "@/components/question/table/hazardPerception";
import MultipleQuestionTable from "@/components/question/table/multipleQuestion";
export default {
  components: {
    PolarQuestionTable,
    HazardPerceptionTable,
    MultipleQuestionTable
  },
  data() {
    return {
      subjects: ["Meerkeuze", "Ja/Nee", "Gevaarherkenning"],
      selectedSubject: "",
    };
  },
};
</script>