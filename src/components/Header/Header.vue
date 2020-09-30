<template>
  <div>
    <v-app-bar app color="#FF969E" dark>
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
      <v-btn @click="goTo('/')" link color="#E8838B" large>Home</v-btn>
      <v-spacer v-if="!isLoggedIn"></v-spacer>
      <v-btn
        id="loginLink"
        v-if="!isLoggedIn"
        @click="goTo('/login')"
        link
        color="#E8838B"
        large
        >Login</v-btn
      >
      <v-spacer v-if="!isLoggedIn"></v-spacer>
      <v-btn
        id="registrateLink"
        v-if="!isLoggedIn"
        @click="goTo('/registrate')"
        link
        color="#E8838B"
        large
        >register</v-btn
      >
      <v-spacer v-if="isLoggedIn"></v-spacer>
      <v-btn
        id="neweventLink"
        v-if="isLoggedIn"
        @click="goTo('/newevent')"
        link
        color="#E8838B"
        large
        >New Event</v-btn
      >
      <v-spacer v-if="isLoggedIn"></v-spacer>
      <v-btn
        id="userLink"
        v-if="isLoggedIn"
        @click="goTo('/user')"
        link
        color="#E8838B"
        large
        >My profile</v-btn
      >
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
  },
  methods: {
    goTo(path) {
      this.$router.push(path).catch(err => {
        console.log(err);
      });
    }
  }
};
</script>

<style lang="scss"></style>
