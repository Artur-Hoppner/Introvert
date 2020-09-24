<template>
  <v-app>
    <v-main>
      <StatusMessage v-if="statusMessage" />

      <Header />

      <router-view />

      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import StatusMessage from '@/components/StatusMessage/StatusMessage.vue';
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';
export default {
  name: 'App',
  data: () => ({}),
  components: { Header, StatusMessage, Footer },
  computed: {
    ...mapGetters(['statusMessage'])
  },
  created() {
    if (localStorage.getItem('token')) {
      this.$store.dispatch('getUser');
    }
    this.$store.dispatch('getEvents');
  }
};
</script>
