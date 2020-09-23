<template>
  <div>
    <h1>Events</h1>
    <EventContainer />
    <ul
      v-for="event in getAllEvents"
      v-bind:event="event"
      v-bind:key="event.id"
    >
      <li>{{ event.typeOfEvent }}</li>
      <li>{{ event.name }}</li>
      <li>{{ event.place }}</li>
      <li>{{ event.createdBy }}</li>
      <li>{{ event.participant }}</li>
    </ul>
  </div>
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
