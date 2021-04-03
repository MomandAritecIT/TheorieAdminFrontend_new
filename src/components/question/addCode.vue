<template>
  <div>
    <h3>Add Code:</h3>
    <div class="add">
      <form @submit.prevent="onSubmit">
        <v-radio-group v-model="column" column>
          <v-radio label="2 weken" value="2"></v-radio>
          <v-radio label="4 weken" value="4"></v-radio>
          <v-radio label="6 weken" value="6"></v-radio>
        </v-radio-group>
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      column: "",
    };
  },
  methods: {
    ...mapActions(["addCode"]),
    onSubmit() {
      this.addCode(this.column);
    },
  },
};
</script>