<template>
  <v-flex xs14 md6>
    <v-card margin="10px" min-width="344" class="event-container">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title id="typeOfEvent" class="headline">{{
            event.typeOfEvent
          }}</v-list-item-title>
          <v-list-item-subtitle id="eventName">{{
            event.name
          }}</v-list-item-subtitle>
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
          <v-list-item-title id="eventPlaceDate"
            >{{ event.place }}/{{ event.date }}</v-list-item-title
          >
          <v-list-item-subtitle id="eventDescription">{{
            event.description
          }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions>
        <v-list-item-subtitle id="eventCreatedBy"
          >Arranged by: {{ event.createdBy }}</v-list-item-subtitle
        >

        <v-spacer></v-spacer>
        <v-tab class="d-flex flex-row">
          <v-badge
            id="badgeLikeTrueUser"
            v-if="toggleLike(event, user) == true"
            offset-x="6"
            offset-y="6"
            class="icon"
            color="#ff000074"
            :content="event.likes.length"
          >
            <v-icon
              @click="likeEvent(event)"
              v-if="toggleLike(event, user) == true"
              color="#ff000074"
              >favorite</v-icon
            >
          </v-badge>
          <v-badge
            id="badgeLikeFalseUser"
            v-if="toggleLike(event, user) == false"
            offset-x="6"
            offset-y="6"
            class="icon"
            color="#ff000074"
            :content="event.likes.length"
          >
            <v-icon
              @click="likeEvent(event)"
              v-if="toggleLike(event, user) == false"
              >favorite_border</v-icon
            >
          </v-badge>

          <v-badge
            id="badgeAttendingTrueUser"
            v-if="toggleAttending(event, user) == true"
            offset-x="6"
            offset-y="6"
            class="icon"
            color="#0000ff62"
            :content="event.participant.length"
          >
            <v-icon
              @click="attendingToEvent(event)"
              color="#0000ff62"
              v-if="toggleAttending(event, user) == true"
              >person</v-icon
            >
          </v-badge>
          <v-badge
            id="badgeAttendingFalseUser"
            v-if="toggleAttending(event, user) == false"
            offset-x="6"
            offset-y="6"
            class="icon"
            color="#0000ff62"
            :content="event.participant.length"
          >
            <v-icon
              @click="attendingToEvent(event)"
              v-if="toggleAttending(event, user) == false"
              >person</v-icon
            >
          </v-badge>
        </v-tab>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'EventContainer',
  props: ['event'],
  computed: mapGetters(['user', 'isLoggedIn']),
  methods: {
    ...mapActions(['attendingToEvent', 'likeEvent']),
    toggleLike(event, user) {
      let likeMatch = event.likes.find(likes => {
        return likes == user.username;
      });
      if (likeMatch == user.username) {
        return true;
      } else {
        return false;
      }
    },
    toggleAttending(event, user) {
      let likeMatch = event.participant.find(participant => {
        return participant == user.username;
      });
      if (likeMatch == user.username) {
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
.icon {
  margin-right: 15px;
}
</style>
