<template>
  <v-app>
    <v-main>
      <Carousel />
      <Header />

      <router-view />

      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Carousel from '@/components/Carousel/Carousel.vue';
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';
export default {
  name: 'App',
  data: () => ({}),
  components: { Carousel, Header, Footer },

  created() {
    if (localStorage.getItem('token')) {
      this.$store.dispatch('getUser');
    }
    this.$store.dispatch('getEvents');
  }
};
</script>
