<template>
  <v-container class="d-flex">
    <v-row align="center" justify="center">
      <v-col class="d-flex" cols="12" sm="6">
        <v-select
          @input="filterEvent()"
          v-model="filterEventTag"
          :items="[
            'Musical',
            'Theatre',
            'Opera',
            'Consert',
            'Lecture',
            'Festival',
            'Dance',
            'Ballet',
            'Other'
          ]"
          background-color="#fcbfc41d"
          filled
          label="Filter Events"
          item-color="#ff969f2e"
          color="#ff969f2e"
        ></v-select>
      </v-col>

      <v-btn @click="resetFilter()" color="light">Reset</v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
import { mapFields } from 'vuex-map-fields';
export default {
  name: 'SearchBar',
  computed: {
    ...mapFields(['filterEventTag'])
  },
  methods: {
    ...mapActions(['filterEvent', 'resetFilter'])
  }
};
</script>

<style lang="scss"></style>
