<template>
  <v-card class="mx-auto" max-width="500">
    <v-img
      class="white--text align-end"
      height="240px"
      src="./../../assets/Profile.jpg"
    >
      <v-card-title>{{ user.username }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">{{ user.email }} </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ user.name }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: mapGetters(['user'])
};
</script>

<style lang="scss" scoped>
.mx-auto {
  margin-top: 40px;
}
</style>
