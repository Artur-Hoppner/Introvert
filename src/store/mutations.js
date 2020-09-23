import { updateField } from 'vuex-map-fields';

//*************************/
//*** GLOBAL MUTATIONS ***/
//***********************/

const mutations = {
  updateField,
  allEvents(state, events) {
    state.allEvents = events;
  },
  changeTokenState(state, token) {
    state.token = token;
    state.errorMessage = null;
    console.log(state.token, 'Change token state');
    console.log(localStorage.getItem('token'), 'show localstorage');
  },

  changeUserState(state, user) {
    state.user = user;
    state.newEvent.createdBy = user.username;
  },
  statusMessage(state, response) {
    state.statusMessage = response;
  }
};

export default mutations;
