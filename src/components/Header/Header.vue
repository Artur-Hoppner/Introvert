<template>
  <div>
    <v-app-bar app color="grey" dark>
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
      <v-btn @click="goTo('/')" link color="grey" large>Home</v-btn>
      <v-spacer v-if="!isLoggedIn"></v-spacer>
      <v-btn v-if="!isLoggedIn" @click="goTo('/login')" link color="grey" large
        >Login</v-btn
      >
      <v-spacer v-if="!isLoggedIn"></v-spacer>
      <v-btn
        v-if="!isLoggedIn"
        @click="goTo('/registrate')"
        link
        color="grey"
        large
        >Registrate</v-btn
      >
      <v-spacer v-if="isLoggedIn"></v-spacer>
      <v-btn
        v-if="isLoggedIn"
        @click="goTo('/newevent')"
        link
        color="grey"
        large
        >New Event</v-btn
      >
      <v-spacer v-if="isLoggedIn"></v-spacer>
      <v-btn v-if="isLoggedIn" @click="goTo('/user')" link color="grey" large
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
