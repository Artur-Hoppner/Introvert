<template>
  <div>
    <nav v-if="isLoggedIn">
      <button @click="logOut">Logout</button>
    </nav>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'logout',
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  methods: {
    ...mapActions(['logOut'])
  }
};
</script>

<style lang="scss"></style>
