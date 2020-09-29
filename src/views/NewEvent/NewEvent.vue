<template>
  <v-container class="container">
    <v-layout>
      <v-flex class="login-form text-xs-center">
        <div class="display-1 mb-3 ">
          <v-icon x-large>create</v-icon> Create your event newEvent
        </div>
        <v-card>
          <v-card-text>
            <div>
              <template>Event information:</template>
            </div>

            <v-form @keyup.enter.native="newEvent">
              <v-select
                color="#FF969E"
                v-model="typeOfEvent"
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
                label="Type of event"
              ></v-select>
              <v-text-field
                color="#FF969E"
                v-model="name"
                prepend-icon="person"
                label="Name"
              ></v-text-field>
              <v-text-field
                color="#FF969E"
                v-model="place"
                prepend-icon="room"
                label="Place"
              ></v-text-field>
              <v-text-field
                color="#FF969E"
                v-model="description"
                light="light"
                prepend-icon="info"
                label="description"
                type="text"
              ></v-text-field>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        color="#FF969E"
                        v-model="date"
                        label="Picker in menu"
                        prepend-icon="event"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      color="#FF969E"
                      v-model="date"
                      no-title
                      scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn text color="#FF969E" @click="menu = false"
                        >Cancel</v-btn
                      >
                      <v-btn text color="#FF969E" @click="$refs.menu.save(date)"
                        >OK</v-btn
                      >
                    </v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
              <v-btn color="#primary" @click="newEvent">Create new event</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
import { mapFields } from 'vuex-map-fields';
export default {
  name: 'NewEvent',
  computed: {
    ...mapFields([
      'newEvent.name',
      'newEvent.place',
      'newEvent.date',
      'newEvent.description',
      'newEvent.typeOfEvent'
    ]),
    storvalue() {
      return this.$store.state;
    }
  },
  methods: {
    ...mapActions(['newEvent', 'getEvents'])
  }
};
</script>

<style lang="scss"></style>
