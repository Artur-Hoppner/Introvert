<template>
  <v-flex xs14 md6>
    <v-card margin="10px" min-width="344" class="event-container">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="headline">{{
            event.typeOfEvent
          }}</v-list-item-title>
          <v-list-item-subtitle>{{ event.name }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-img
        v-if="event.typeOfEvent == 'Ballet'"
        src="../../../assets/eventImages/Ballet.jpg"
        height="194"
      ></v-img>
      <v-img
        v-if="event.typeOfEvent == 'Consert'"
        src="../../../assets/eventImages/Consert.jpg"
        height="194"
      ></v-img>
      <v-img
        v-if="event.typeOfEvent == 'Dance'"
        src="../../../assets/eventImages/Dance.jpg"
        height="194"
      ></v-img>
      <v-img
        v-if="event.typeOfEvent == 'Festival'"
        src="../../../assets/eventImages/Festival.jpg"
        height="194"
      ></v-img>
      <v-img
        v-if="event.typeOfEvent == 'Lecture'"
        src="../../../assets/eventImages/Lecture.jpg"
        height="194"
      ></v-img>
      <v-img
        v-if="event.typeOfEvent == 'Musical'"
        src="../../../assets/eventImages/Musical.jpg"
        height="194"
      ></v-img>
      <v-img
        v-if="event.typeOfEvent == 'Opera'"
        src="../../../assets/eventImages/Opera.jpg"
        height="194"
      ></v-img>
      <v-img
        v-if="event.typeOfEvent == 'Other'"
        src="../../../assets/eventImages/Other.jpg"
        height="194"
      ></v-img>
      <v-img
        v-if="event.typeOfEvent == 'Theatre'"
        src="../../../assets/eventImages/Theatre.jpg"
        height="194"
      ></v-img>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title
            >{{ event.place }}/{{ event.date }}</v-list-item-title
          >
          <v-list-item-subtitle>{{ event.description }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions>
        <v-list-item-subtitle
          >Arranged by: {{ event.createdBy }}</v-list-item-subtitle
        >

        <v-spacer></v-spacer>

        <v-icon
          @click="likeEvent(event)"
          v-if="toggleLike(event) == true"
          color="red"
          >favorite</v-icon
        >
        <v-icon @click="likeEvent(event)" v-if="toggleLike(event) == false"
          >favorite_border</v-icon
        >
        <v-icon
          @click="attendingToEvent(event)"
          color="blue"
          v-if="toggleAttending(event) == true"
          >person</v-icon
        >
        <v-icon
          @click="attendingToEvent(event)"
          v-if="toggleAttending(event) == false"
          >person</v-icon
        >
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Events',
  props: { event },
  computed: mapGetters(['user']),
  methods: {
    ...mapActions(['attendingToEvent', 'likeEvent']),
    toggleLike(event) {
      let likeMatch = event.likes.find(likes => {
        return likes == 'Artur';
      });
      if (likeMatch == 'Artur') {
        return true;
      } else {
        return false;
      }
    },
    toggleAttending(event) {
      let likeMatch = event.participant.find(participant => {
        return participant == 'Artur';
      });
      if (likeMatch == 'Artur') {
        return true;
      } else {
        return false;
      }
    },
    picture() {
      console.log(event);
      return event.typeOfEvent;
    }
  }
};
</script>

<style lang="scss" scoped>
.event-container {
  margin: 7px;
}
</style>
