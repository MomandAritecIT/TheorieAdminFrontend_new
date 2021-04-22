<template>
  <!-- <v-card class="mx-auto" max-width="1000" outlined>
    <v-form>
      <v-text-field
        v-model="form.email"
        type="text"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="form.password"
        type="password"
        label="Password"
        autocomplete="true"
        required
      ></v-text-field>
      <v-btn color="primary" class="mr-4" @click="onSubmit"> Submit </v-btn>
    </v-form>
  </v-card> -->
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
      Validate
    </v-btn>

    <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

    <v-btn color="warning" @click="resetValidation"> Reset Validation </v-btn>
  </v-form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions({ login: "Auth/login" }),
    onSubmit(e) {
      e.preventDefault();
      this.login(this.form)
        .then(() => {
          this.$router.replace({
            name: "Dashboard",
          });
        })
        .catch(() => {
          console.log("failed");
        });
    },
  },
};
</script>
