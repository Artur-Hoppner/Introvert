<template>
  <v-content>
    <v-container class="container">
      <v-layout>
        <v-flex class="login-form text-xs-center">
          <div class="display-1 mb-3 ">
            <v-icon x-large>home</v-icon> Sign Up
          </div>
          <v-card>
            <v-card-text>
              <div class="subheading">
                <template>Create your account</template>
              </div>
              <v-form>
                <v-text-field
                  v-model="username"
                  prepend-icon="person"
                  label="Username"
                ></v-text-field>
                <v-text-field
                  v-model="name"
                  prepend-icon="person"
                  label="Name"
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  light="light"
                  prepend-icon="email"
                  label="Email"
                  type="text"
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  light="light"
                  prepend-icon="lock"
                  label="Password"
                  type="password"
                ></v-text-field>
                <v-text-field
                  v-model="verifypassword"
                  light="light"
                  prepend-icon="lock"
                  label="Verify Password"
                  type="password"
                ></v-text-field>

                <v-btn @click="registration">Sign in</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import { mapActions } from 'vuex';
import { mapFields } from 'vuex-map-fields';
export default {
  name: 'Registration',
  computed: {
    ...mapFields([
      'newUser.name',
      'newUser.username',
      'newUser.email',
      'newUser.password',
      'newUser.verifypassword'
    ]),
    storvalue() {
      return this.$store.state.newUser;
    }
  },
  methods: {
    ...mapActions(['registration'])
  }
};
</script>

<style lang="scss" scoped>
.container {
  max-width: '20px';
}
</style>
