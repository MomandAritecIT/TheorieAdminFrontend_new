<template>
  <v-app>
    <v-navigation-drawer class="blue darken-2" dark app permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"> Theorie Admin </v-list-item-title>
          <v-list-item-subtitle> Aritec IT </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="link in links" :key="link.title" :to="link.route">
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="logout">
          <v-list-item-icon>
            <v-icon>mdi-logout-variant</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <Notification />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import Notification from "@/components/notification";

export default {
  components: {
    Notification,
  },
  name: "App",
  data() {
    return {
      links: [
        { title: "Dashboard", route: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Code", route: "Code", icon: "mdi-qrcode" },
      ],
      right: null,
    };
  },
  methods: {
    ...mapActions({
      logoutAction: "Auth/logout",
    }),
    logout() {
      this.logoutAction().then(() => {
        this.$router.replace({
          name: "Login",
        });
      });
    },
  },
};
</script>
