<template>
  <div id="app">
    <h1>Register</h1>
    <form>
      <input type="text" v-model="name" placeholder="Name" />
      <input type="text" v-model="username" placeholder="Username" />
      <input type="text" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <input
        type="password"
        v-model="verifypassword"
        placeholder="Verify Password"
      />
    </form>
    <button @click="registration">Register new user</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapFields } from 'vuex-map-fields';
export default {
  name: 'Registration',
  computed: {
    ...mapFields([
      'newUser.name',
      'newUser.username',
      'newUser.email',
      'newUser.password',
      'newUser.verifypassword'
    ]),
    storvalue() {
      return this.$store.state.newUser;
    }
  },
  methods: {
    ...mapActions(['registration'])
  }
};
</script>

<style lang="scss"></style>
