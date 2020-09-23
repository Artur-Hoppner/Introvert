<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link v-if="!isLoggedIn" to="/login">Login</router-link>
      <router-link v-if="!isLoggedIn" to="/registrate">registrate</router-link>
      <router-link v-if="isLoggedIn" to="/newevent">New Event</router-link>
      <router-link v-if="isLoggedIn" to="/user">My profile</router-link>
      <Logout />
    </nav>
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
