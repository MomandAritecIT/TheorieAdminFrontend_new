<template>
  <section>
    <v-card elevation="2" class="pa-5">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="form.email"
          :rules="emailRules"
          label="E-mail"
          autocomplete
          required
        ></v-text-field>

        <v-text-field
          v-model="form.password"
          :rules="passwordRules"
          label="password"
          type="password"
          autocomplete
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
        (v) => !!v || "Password is required",
        (v) => (v && v.length >= 6) || "Pasword must be atleast 6 characters",
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
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
