<template>
  <div>
    <h3>Add Code:</h3>
    <div class="add">
      <v-form>
        <v-text-field
          v-model="form.question"
          label="Vraag 'Wat doe je?'"
          required
        ></v-text-field>
        <v-img width="200" :src="this.selectedImage" /><br />
        <input type="file" accept="image/*" @change="onFileSelected" />
        <br /><small>antwoord:</small>
        <v-radio-group v-model="form.answer" mandatory>
          <v-radio label="Remmen" value="1"></v-radio>
          <v-radio label="Gas los" value="2"></v-radio>
          <v-radio label="Niets" value="3"></v-radio>
        </v-radio-group>
        <v-textarea
          v-model="form.motivation"
          solo
          name="input-7-4"
          label="Motivatie"
        ></v-textarea>
      </v-form>
      <input type="submit" value="Submit" @click.prevent="onSubmit()"/>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      form: {},
      selectedImage: null,
    };
  },
  methods: {
    ...mapActions(["addQuestion"]),
    onSubmit() {
      const formData = new FormData();
      formData.append("image", this.selectedFile, this.selectedFile.name);
      formData.append("answer", this.form.answer);
      formData.append("question", this.form.question);
      formData.append("motivation", this.form.motivation);
      formData.append("type", 2);

      this.addQuestion(formData);
    },
    onFileSelected(e) {
      this.selectedFile = e.target.files[0];
      this.selectedImage = URL.createObjectURL(e.target.files[0]);
    },
  },
};
</script>