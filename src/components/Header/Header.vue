<template>
  <div>
    <v-app-bar app color="" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../../assets/navlogo.png"
          transition="scale-transition"
          width="40"
        />
      </div>
      <v-spacer></v-spacer>
      <router-link to="/">Home</router-link>
      <v-spacer v-if="!isLoggedIn"></v-spacer>
      <router-link v-if="!isLoggedIn" to="/login">Login</router-link>
      <v-spacer v-if="!isLoggedIn"></v-spacer>
      <router-link v-if="!isLoggedIn" to="/registrate">registrate</router-link>
      <v-spacer v-if="isLoggedIn"></v-spacer>
      <router-link v-if="isLoggedIn" to="/newevent">New Event</router-link>
      <v-spacer v-if="isLoggedIn"></v-spacer>
      <router-link v-if="isLoggedIn" to="/user">My profile</router-link>
      <v-spacer></v-spacer>
      <Logout />
      <v-spacer></v-spacer>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Logout from './Logout/Logout';
export default {
  name: 'Header',
  components: { Logout },

  computed: {
    ...mapGetters(['isLoggedIn'])
  }
};
</script>

<style lang="scss"></style>
