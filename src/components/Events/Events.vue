<template>
  <v-container>
    <v-layout row wrap>
      <EventContainer
        v-for="event in getAllEvents"
        v-bind:event="event"
        v-bind:key="event.id"
      />
    </v-layout>
  </v-container>
</template>

<script>
import EventContainer from './EventContainer/EventContainer';
export default {
  name: 'Events',
  components: {
    EventContainer
  },
  computed: {
    getstate() {
      return this.$store.state;
    },
    getAllEvents() {
      return this.$store.state.allEvents;
    }
  }
};
</script>

<style lang="scss"></style>
