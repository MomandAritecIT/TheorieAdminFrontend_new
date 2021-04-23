<template>
  <section class="d-flex">
    <v-card class="mx-auto pa-5" min-width="400" elevation="2">
      <v-img :src="require('@/assets/logo.png')" class="d-block mx-auto" width="200px"></v-img>

      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="form.email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <v-text-field
          v-model="form.password"
          :rules="passwordRules"
          label="password"
          type="password"
          required
        ></v-text-field>

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click.prevent="onSubmit"
        >
          Login
        </v-btn>
      </v-form>
    </v-card>
  </section>
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
      passwordRules: [
        (v) => !!v || "Wachtwoord is vereist",
        (v) => (v && v.length >= 6) || "Wachtwoord moet tenmiste 6 karakters lang zijn",
      ],
      emailRules: [
        (v) => !!v || "E-mail is vereist",
        (v) => /.+@.+\..+/.test(v) || "E-mail is niet geldig",
      ],
      valid: false,
    };
  },
  methods: {
    ...mapActions({
      login: "Auth/login",
      SET_SUCCESS: "Notification/SET_SUCCESS",
      SET_ERROR: "Notification/SET_ERROR",
    }),
    onSubmit() {
      this.login(this.form)
        .then(() => {
          this.$router.replace({
            name: "Dashboard",
          });
          this.SET_SUCCESS("succesvol ingelogged");
        })
        .catch((error) => {
          this.SET_ERROR(error.response.data.error);
        });
    },
  },
};
</script>
