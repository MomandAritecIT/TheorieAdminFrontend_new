<template>
  <v-card class="mx-auto" max-width="1000" outlined>
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
  </v-card>
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
    ...mapActions(["login"]),
    onSubmit(e) {
        e.preventDefault();
        this.login(this.form).then(() => {
            this.$router.replace({
                name: 'Dashboard'
            })
        }).catch((error) => {
            console.log(error);
        });
    },
  },
};
</script>
