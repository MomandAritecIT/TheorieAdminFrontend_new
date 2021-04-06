<template>
  <div>
    <h3>Add Code:</h3>
    <div class="add">
      <v-form action="">
        <v-text-field
          v-model="form.question"
          label="Vraag"
          required
        ></v-text-field>
        <v-img width="200" :src="this.selectedImage" /><br />
        <input type="file" accept="image/*" @change="onFileSelected" />
        <br /><small>antwoord:</small>
        <div class="d-flex">
          <v-radio-group v-model="form.is_correct" mandatory>
            <v-radio class="mt-5" value="0"></v-radio>
            <v-radio class="mt-5" value="1"></v-radio>
            <v-radio class="mt-5" value="2"></v-radio>
          </v-radio-group>
          <div>
            <v-text-field
              v-model="form.answer_1"
              label="Mogelijke antwoord"
              required
            ></v-text-field>
            <v-text-field
              v-model="form.answer_2"
              label="Mogelijke antwoord"
              required
            ></v-text-field>
            <v-text-field
              v-model="form.answer_3"
              label="Mogelijke antwoord"
              required
            ></v-text-field>
          </div>
        </div>
        <v-textarea
          v-model="form.motivation"
          solo
          name="input-7-4"
          label="Motivatie"
        ></v-textarea>
        <input type="submit" value="Submit" @click.prevent="onSubmit()"/>
      </v-form>
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
      const answers = [this.form.answer_1, this.form.answer_2, this.form.answer_3];
      this.form.answers = answers.join();
      
      const formData = new FormData();
      formData.append("image", this.selectedFile, this.selectedFile.name);
      formData.append("question", this.form.question);
      formData.append("answers", this.form.answers);
      formData.append("is_correct", parseInt(this.form.is_correct));
      formData.append("motivation", this.form.motivation);
      formData.append("type", 3);

      this.addQuestion(formData);
    },
    onFileSelected(e) {
      this.selectedFile = e.target.files[0];
      this.selectedImage = URL.createObjectURL(e.target.files[0]);
    },
  },
};
</script>