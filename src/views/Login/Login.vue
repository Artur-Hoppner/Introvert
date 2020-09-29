<template>
  <v-container max-width="200">
    <v-layout>
      <v-flex class="login-form text-xs-center">
        <div class="display-1 mb-3 ">
          <v-icon x-large>home</v-icon> My Privacy
        </div>
        <v-card>
          <v-card-text>
            <div class="subheading">
              <template>Log in to your account</template>
            </div>
            <v-form @keyup.enter.native="login">
              <v-text-field
                v-model="username"
                prepend-icon="person"
                label="Username"
              ></v-text-field>

              <v-text-field
                v-model="password"
                light="light"
                prepend-icon="lock"
                label="Password"
                type="password"
              ></v-text-field>

              <v-btn id="loginButt" @click="login">Sign in</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
        <div class="d-flex pa-6">
          Don't have an account?
          <v-btn id="goToButton" class="sign-up-link" @click="goTo"
            >Sign up</v-btn
          >
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
import { mapFields } from 'vuex-map-fields';

export default {
  name: 'Login',
  computed: {
    ...mapFields(['login.username', 'login.password'])
  },
  methods: {
    ...mapActions(['login']),
    goTo() {
      this.$router.push('/registrate');
    }
  }
};
</script>
<style lang="scss" scoped>
.sign-up-link {
  margin-top: -7px;
  margin-left: 10px;
}
</style>
