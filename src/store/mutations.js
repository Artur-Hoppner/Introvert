import { updateField } from 'vuex-map-fields';

//*************************/
//*** GLOBAL MUTATIONS ***/
//***********************/

const mutations = {
  updateField,
  allEvents(state, events) {
    state.allEvents = events;
    state.filterEvents = events;
    console.log(state.allEvents);
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
  },
  filterEventMutation(state) {
    const filterEventTag = state.filterEventTag;
    const filterEvent = state.filterEvents;
    let foundEvents = [];

    foundEvents = filterEvent.filter(item =>
      item.typeOfEvent.match(filterEventTag)
    );
    state.allEvents = foundEvents;
  },
  resetFilter(state) {
    state.allEvents = state.filterEvents;
  }
};

export default mutations;
