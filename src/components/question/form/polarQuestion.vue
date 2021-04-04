<template>
  <div>
    <h3>Add Code:</h3>
    <div class="add">
      <form @submit.prevent="onSubmit">
        <v-text-field
          v-model="form.question"
          label="Vraag"
          required
        ></v-text-field>
        <v-img width="200" :src="this.selectedImage" /><br />
        <input type="file" accept="image/*" @change="onFileSelected" />
        <br /><small>antwoord:</small>
        <v-radio-group v-model="form.answer" mandatory>
          <v-radio label="Ja" value="1"></v-radio>
          <v-radio label="Nee" value="0"></v-radio>
        </v-radio-group>
        <v-textarea v-model="form.motivation" label="Motivatie"></v-textarea>
        <input type="submit" value="Submit" @click.prevent="onSubmit()"/>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      form: {},
      selectedImage: null
    };
  },
  methods: {
    ...mapActions(["addQuestion"]),
    onSubmit() {    
      const formData = new FormData();
      formData.append("image", this.selectedFile, this.selectedFile.name);
      formData.append("question", this.form.question);
      formData.append("is_correct", parseInt(this.form.answer));
      formData.append("motivation", this.form.motivation);
      formData.append("type", 1);

      this.addQuestion(formData);
    },
    onFileSelected(e) {
      this.selectedFile = e.target.files[0];
      this.selectedImage = URL.createObjectURL(e.target.files[0]);
    },
  },
};
</script>