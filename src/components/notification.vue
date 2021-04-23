<template>
  <div class="text-center">
    <v-snackbar color="error" bottom right :value="GET_ERROR">
      <p align="center" class="mb-0">{{ GET_ERROR }}</p>
    </v-snackbar>
    <v-snackbar color="success" bottom right :value="GET_SUCCESS">
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