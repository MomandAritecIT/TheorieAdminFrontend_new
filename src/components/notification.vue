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
import { mapGetters } from "vuex";
export default {
  name: "Notification",
  computed: {
    ...mapGetters({
      GET_ERROR: "Notification/GET_ERROR",
      GET_SUCCESS: "Notification/GET_SUCCESS",
    }),
  },
};
</script>

<style>
</style>