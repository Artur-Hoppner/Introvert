<template>
  <v-app>
    <v-main>
      <Header />

      <router-view />

      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';
export default {
  name: 'App',
  data: () => ({}),
  components: { Header, Footer },

  created() {
    if (localStorage.getItem('token')) {
      this.$store.dispatch('getUser');
    }
    this.$store.dispatch('getEvents');
  }
};
</script>
