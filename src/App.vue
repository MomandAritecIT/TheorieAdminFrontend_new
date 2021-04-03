<template>
  <v-app>
    <v-main>
      <nav>
        <ul>
          <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
          <li><router-link :to="{ name: 'Login' }">Login</router-link></li>
          <li><a href="#" @click.prevent="logout">Logout</a></li>
        </ul>
      </nav>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "App",
  methods: {
    ...mapActions({
      logoutAction: 'logout'
    }),
    logout() {
      this.logoutAction().then(() => {
        this.$router.replace({
          name: 'Login'
        })
      })
    }
  }
};
</script>
