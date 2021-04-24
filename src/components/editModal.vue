<template>
  <v-row justify="center">
    <v-dialog v-model="visibility" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline"><slot name="title" /></span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col v-if="formInputs.boolean !== null" cols="12" sm="6" md="6">
                <v-switch
                  label="Geblokkeerd"
                  color="success"
                  value="success"
                ></v-switch>
              </v-col>
              <v-col v-if="formInputs.date !== null" cols="12" sm="6" md="6">
                <v-menu
                  ref="menu"
                  :close-on-content-click="false"
                  :return-value.sync="date"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      label="Picker in menu"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">
                      Cancel
                    </v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(date)">
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="cancelModal"> Close </v-btn>
          <v-btn color="blue darken-1" text @click="saveModal"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: ["visibility", "formInputs"],
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false
  }),
  methods: {
    cancelModal() {
      this.$emit("cancelModal");
    },
    saveModal() {
      this.$emit("saveModal");
    },
  },
};
</script>

<style>
</style>