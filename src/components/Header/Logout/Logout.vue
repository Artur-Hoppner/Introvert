<template>
  <div>
    <v-btn v-if="isLoggedIn" @click="logOut" link color="#E8838B" large>
      <span class="mr-2">Logout</span>
      <v-icon>fas fa-sign-out-alt</v-icon>
    </v-btn>
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

<style lang="scss" scoped>
.logout-button {
  color: white;
}
</style>
