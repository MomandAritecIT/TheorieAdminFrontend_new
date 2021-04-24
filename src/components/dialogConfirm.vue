<template>
  <v-row justify="center">
    <v-dialog @click:outside="closeDialog" v-model="visibility" max-width="600">
      <v-card>
        <v-card-title class="headline">
          <slot name="title"/>
        </v-card-title>
        <v-card-text><slot name="text"/></v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="confirmAccept">
            <slot name="confirmButton"/>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: [ 'visibility' ],
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    confirmAccept() {
      this.$emit('confirmAccept');
    },
    closeDialog() {
      this.visibility = true;
      this.$emit('closeDialog');
    }
  }
};
</script>

<style>
</style>