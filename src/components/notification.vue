<template>
  <div class="text-center">
    <v-snackbar color="error" :value="GET_ERROR" :timeout="2000">
      <p align="center" class="mb-0">{{ GET_ERROR }}</p>
    </v-snackbar>
    <v-snackbar color="success" :value="GET_SUCCESS" :timeout="2000">
      <p align="center" class="mb-0">{{ GET_SUCCESS }}</p>
    </v-snackbar>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Notification",
  computed: {
    ...mapGetters({
      GET_ERROR: "Notification/GET_ERROR",
      GET_SUCCESS: "Notification/GET_SUCCESS",
    }),
  },
  watch: {
    GET_ERROR: {
      handler: function () {
        var self = this;
        setTimeout(function () {
          self.GET_ERROR("");
        }, 2000);
      },
    },
    GET_SUCCESS: {
      handler: function () {
        var self = this;
        setTimeout(function () {
          self.GET_SUCCESS("");
        }, 2000);
      },
    },
    deep: true,
  },
  methods: {
    ...mapActions({
      login: "Auth/login",
      SET_SUCCESS: "Notification/SET_SUCCESS",
      SET_ERROR: "Notification/SET_ERROR",
    }),
  },
};
</script>

<style>
</style>