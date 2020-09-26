import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';

Vue.use(Vuex);
//*********************/
//*** GLOBAL STATE ***/
//*******************/

export default new Vuex.Store({
  state: {
    newUser: {
      name: '',
      username: '',
      email: '',
      password: '',
      verifypassword: ''
    },
    login: {
      username: '',
      password: ''
    },
    allEvents: '',
    newEvent: {
      name: '',
      place: '',
      description: '',
      date: '',
      typeOfEvent: '',
      createdBy: ''
    },
    commentEvent: 'testar kommentar på event',
    token: localStorage.getItem('token') || '',
    user: '',
    statusMessage: null,
    filterEventTag: '',
    filterEvents: ''
  },
  actions: actions,
  mutations: mutations,
  getters: getters
});
