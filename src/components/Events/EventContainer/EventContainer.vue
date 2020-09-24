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
        src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
        height="194"
      ></v-img>

      <v-card-text> {{ event.name }} </v-card-text>

      <v-card-actions>
        <v-btn text color="deep-purple accent-4">
          Read
        </v-btn>
        <v-btn text color="deep-purple accent-4">
          Bookmark
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>

    <!-- <p>{{ event.typeOfEvent }}</p>
      <p>{{ event.name }}</p> -->
    <!-- <li>{{ event.typeOfEvent }}</li>
        <li>{{ event.name }}</li>
        <li>{{ event.place }}</li>
        <li>{{ event.createdBy }}</li>
        <li>{{ event.participant }}</li> -->
  </v-flex>
</template>

<script>
export default {
  name: 'Events',
  props: { event }
};
</script>

<style lang="scss" scoped>
.event-container {
  margin: 7px;
}
</style>
