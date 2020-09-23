<template>
  <div id="app">
    <h1>Login</h1>
    <form>
      <input type="text" v-model="username" placeholder="Username" />
      <input type="password" v-model="password" placeholder="Password" />
    </form>
    <button class="success button" @click="login">Login</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapFields } from 'vuex-map-fields';

export default {
  name: 'Login',
  computed: {
    ...mapFields(['login.username', 'login.password'])
  },
  methods: {
    ...mapActions(['login'])
  }
};
</script>
<style lang="scss"></style>
