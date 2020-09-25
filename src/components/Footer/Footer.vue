<template>
  <v-footer app="app">
    <StatusMessage v-if="statusMessage" />
  </v-footer>
</template>

<script>
import { mapGetters } from 'vuex';
import StatusMessage from '@/components/StatusMessage/StatusMessage.vue';
export default {
  name: 'Footer',
  computed: {
    ...mapGetters(['statusMessage'])
  },
  components: { StatusMessage }
};
</script>

<style lang="scss"></style>
