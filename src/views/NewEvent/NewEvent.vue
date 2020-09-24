<template>
  <div id="app">
    <h1>New Event</h1>
    <v-select
      v-model="typeOfEvent"
      :items="[
        'Musical',
        'Theatre',
        'Opera',
        'Lecture',
        'Festival',
        'Dance',
        'Other'
      ]"
      label="Standard"
    ></v-select>

    <input type="text" v-model="name" placeholder="Event Name" />
    <input type="text" v-model="place" placeholder="Location" />
    <input type="date" v-model="date" />
    <div>
      <button @click="newEvent">Create new event</button>
      <button @click="attendingToEvent">attendingToEvent</button>
      <button @click="likeEvent">like Event</button>
      <button @click="commentingevent">Commenting Event</button>
    </div>
  </div>
</template>

<script>
import 'vue-select/dist/vue-select.css';

import { mapActions } from 'vuex';
import { mapFields } from 'vuex-map-fields';
export default {
  name: 'NewEvent',
  computed: {
    ...mapFields([
      'newEvent.name',
      'newEvent.place',
      'newEvent.date',
      'newEvent.typeOfEvent'
    ]),
    storvalue() {
      return this.$store.state;
    }
  },
  methods: {
    ...mapActions([
      'newEvent',
      'getEvents',
      'attendingToEvent',
      'likeEvent',
      'commentingevent'
    ])
  }
};
</script>

<style lang="scss"></style>
