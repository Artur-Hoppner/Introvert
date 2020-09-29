// Utilities
import { mount, createLocalVue } from '@vue/test-utils';
// Libraries
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
// Components
import EventContainer from '@/components/Events/EventContainer/EventContainer.vue';

const localVue = createLocalVue();
localVue.use(Vuex, VueRouter);

describe('Carousel component', () => {
  const store = new Vuex.Store({
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
    actions: {
      async login({ state, commit, dispatch }) {
        api
          .post('/users/login', state.login)
          .then(async res => {
            const token = res.data.token;
            const user = res.data.user;
            Axios.defaults.headers.common['Authorization'] = token;
            localStorage.setItem('token', token);
            await commit('changeUserState', user);
            commit('changeTokenState', token);
            dispatch('statusMessageHandeling', res.data.msg);
            router.push('/');
          })
          .catch(async error => {
            dispatch('statusMessageHandeling', error.response.data.msg);
            console.log(error);
          });
      },
      async getUser({ commit }) {
        Axios.get('https://incognito-backend.herokuapp.com/api/users/profile')
          .then(res => {
            console.log('sending getUser');
            const user = res.data.user;
            console.log(res, 'see response');
            commit('changeUserState', user);
          })
          .catch(error => {
            console.log(error.response);
          });
      },
      async registration({ state, dispatch }) {
        api
          .post('/users/register', state.newUser)
          .then(res => {
            console.log(res.data.msg);
            dispatch('statusMessageHandeling', res.data.msg);
            router.push('/login');
          })
          .catch(error => {
            console.log(error.response);
            dispatch('statusMessageHandeling', error.response.data.msg);
          });
      },

      async commentingevent({ state, dispatch }) {
        console.log(state.user.username);
        const userName = state.user.username;
        const comment = state.commentEvent;
        const eventId = '5f69d7c2568199adb10d910f';
        api
          .post('/events/commentingevent', {
            userName,
            comment,
            eventId
          })
          .then(res => {
            dispatch('statusMessageHandeling', res.data.msg);
            console.log(res, 'response');
          })
          .catch(error => {
            console.log(error.response);
            dispatch('statusMessageHandeling', error.response.data.msg);
          });
      },
      async attendingToEvent({ state, dispatch }, event) {
        const eventId = event._id;
        const userName = state.user.username;
        api
          .post('/events/attending', {
            userName,
            eventId
          })
          .then(res => {
            dispatch('getEvents');
            console.log(res, 'response');
          })
          .catch(error => {
            console.log(error.response);
          });
      },
      async likeEvent({ state, dispatch }, event) {
        const eventId = event._id;
        const userName = state.user.username;
        api
          .post('/events/like', {
            userName,
            eventId
          })
          .then(res => {
            console.log(res, 'response');
            dispatch('getEvents');
          })
          .catch(error => {
            console.log(error.response);
          });
      },
      async getEvents({ commit }) {
        api
          .get('/events/all')
          .then(async res => {
            const events = res.data.events[0];
            commit('allEvents', events);
          })
          .catch(error => {
            console.log(error.response);
          });
      },
      async newEvent({ state, dispatch }) {
        api
          .post('/events/register', state.newEvent)
          .then(res => {
            console.log(res, 'created event');
            dispatch('getEvents');
            dispatch('statusMessageHandeling', res.data.msg);
            router.push('/');
          })
          .catch(async error => {
            dispatch('statusMessageHandeling', error.response.data.msg);
          });
      },
      async logOut({ commit }) {
        const token = localStorage.removeItem('token');
        delete Axios.defaults.headers.common['Authorization'];
        router.push('/login');
        const user = '';
        await commit('changeTokenState', token);
        commit('changeUserState', user);
      },
      async statusMessageHandeling({ commit }, value) {
        await commit('statusMessage', value);
        const reset = null;
        setTimeout(() => {
          commit('statusMessage', reset);
        }, 2400);
      },
      filterEvent({ commit }) {
        commit('filterEventMutation');
      },
      resetFilter({ commit }) {
        commit('resetFilter');
      }
    },
    mutations: {
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
    },
    getters: {
      getField,
      isLoggedIn: state => state.token,
      user: state => state.user,
      statusMessage: state => state.statusMessage
    }
  });
  let vuetify;
  beforeEach(() => {
    Vue.use(Vuetify);
    vuetify = new Vuetify();
  });
  test('test if eventContainer', async () => {
    // Arrange;
    await barArray.setProps({ foo: 'bar' });

    const wrapper = mount(EventContainer, {
      localVue,
      vuetify,
      store,
      propsData: {
        participant: ['Lova', 'Marja', 'Artur'],
        likes: ['Marja', 'Artur'],
        comments: [],
        _id: '5f6e59d2e426280017acbf20',
        name: 'Nutcracker',
        place: 'Dramaten Stockholm',
        date: '2020-11-19',
        typeOfEvent: 'Ballet',
        createdBy: 'Artur',
        description: 'Se the classical Ballet by Pjotr Tjajkovskij',
        __v: 0
      }
    });
    await wrapper.propsData({
      participant: ['Lova', 'Marja', 'Artur'],
      likes: ['Marja', 'Artur'],
      comments: [],
      _id: '5f6e59d2e426280017acbf20',
      name: 'Nutcracker',
      place: 'Dramaten Stockholm',
      date: '2020-11-19',
      typeOfEvent: 'Ballet',
      createdBy: 'Artur',
      description: 'Se the classical Ballet by Pjotr Tjajkovskij',
      __v: 0
    });
    //Act

    // Assert
    expect(true).toBe();
  });
});

// const store = new Vuex.Store({
// 	state: {
// 		newUser: {
// 			name: '',
// 			username: '',
// 			email: '',
// 			password: '',
// 			verifypassword: ''
// 		},
// 		login: {
// 			username: '',
// 			password: ''
// 		},
// 		allEvents: '',
// 		newEvent: {
// 			name: '',
// 			place: '',
// 			description: '',
// 			date: '',
// 			typeOfEvent: '',
// 			createdBy: ''
// 		},
// 		commentEvent: 'testar kommentar på event',
// 		token: localStorage.getItem('token') || '',
// 		user: '',
// 		statusMessage: null,
// 		filterEventTag: '',
// 		filterEvents: ''
// 	},
// 	actions: {
// 		async login({ state, commit, dispatch }) {
// 			api
// 				.post('/users/login', state.login)
// 				.then(async res => {
// 					const token = res.data.token;
// 					const user = res.data.user;
// 					Axios.defaults.headers.common['Authorization'] = token;
// 					localStorage.setItem('token', token);
// 					await commit('changeUserState', user);
// 					commit('changeTokenState', token);
// 					dispatch('statusMessageHandeling', res.data.msg);
// 					router.push('/');
// 				})
// 				.catch(async error => {
// 					dispatch('statusMessageHandeling', error.response.data.msg);
// 					console.log(error);
// 				});
// 		},
// 		async getUser({ commit }) {
// 			Axios.get('https://incognito-backend.herokuapp.com/api/users/profile')
// 				.then(res => {
// 					console.log('sending getUser');
// 					const user = res.data.user;
// 					console.log(res, 'see response');
// 					commit('changeUserState', user);
// 				})
// 				.catch(error => {
// 					console.log(error.response);
// 				});
// 		},
// 		async registration({ state, dispatch }) {
// 			api
// 				.post('/users/register', state.newUser)
// 				.then(res => {
// 					console.log(res.data.msg);
// 					dispatch('statusMessageHandeling', res.data.msg);
// 					router.push('/login');
// 				})
// 				.catch(error => {
// 					console.log(error.response);
// 					dispatch('statusMessageHandeling', error.response.data.msg);
// 				});
// 		},

// 		async commentingevent({ state, dispatch }) {
// 			console.log(state.user.username);
// 			const userName = state.user.username;
// 			const comment = state.commentEvent;
// 			const eventId = '5f69d7c2568199adb10d910f';
// 			api
// 				.post('/events/commentingevent', {
// 					userName,
// 					comment,
// 					eventId
// 				})
// 				.then(res => {
// 					dispatch('statusMessageHandeling', res.data.msg);
// 					console.log(res, 'response');
// 				})
// 				.catch(error => {
// 					console.log(error.response);
// 					dispatch('statusMessageHandeling', error.response.data.msg);
// 				});
// 		},
// 		async attendingToEvent({ state, dispatch }, event) {
// 			const eventId = event._id;
// 			const userName = state.user.username;
// 			api
// 				.post('/events/attending', {
// 					userName,
// 					eventId
// 				})
// 				.then(res => {
// 					dispatch('getEvents');
// 					console.log(res, 'response');
// 				})
// 				.catch(error => {
// 					console.log(error.response);
// 				});
// 		},
// 		async likeEvent({ state, dispatch }, event) {
// 			const eventId = event._id;
// 			const userName = state.user.username;
// 			api
// 				.post('/events/like', {
// 					userName,
// 					eventId
// 				})
// 				.then(res => {
// 					console.log(res, 'response');
// 					dispatch('getEvents');
// 				})
// 				.catch(error => {
// 					console.log(error.response);
// 				});
// 		},
// 		async getEvents({ commit }) {
// 			api
// 				.get('/events/all')
// 				.then(async res => {
// 					const events = res.data.events[0];
// 					commit('allEvents', events);
// 				})
// 				.catch(error => {
// 					console.log(error.response);
// 				});
// 		},
// 		async newEvent({ state, dispatch }) {
// 			api
// 				.post('/events/register', state.newEvent)
// 				.then(res => {
// 					console.log(res, 'created event');
// 					dispatch('getEvents');
// 					dispatch('statusMessageHandeling', res.data.msg);
// 					router.push('/');
// 				})
// 				.catch(async error => {
// 					dispatch('statusMessageHandeling', error.response.data.msg);
// 				});
// 		},
// 		async logOut({ commit }) {
// 			const token = localStorage.removeItem('token');
// 			delete Axios.defaults.headers.common['Authorization'];
// 			router.push('/login');
// 			const user = '';
// 			await commit('changeTokenState', token);
// 			commit('changeUserState', user);
// 		},
// 		async statusMessageHandeling({ commit }, value) {
// 			await commit('statusMessage', value);
// 			const reset = null;
// 			setTimeout(() => {
// 				commit('statusMessage', reset);
// 			}, 2400);
// 		},
// 		filterEvent({ commit }) {
// 			commit('filterEventMutation');
// 		},
// 		resetFilter({ commit }) {
// 			commit('resetFilter');
// 		}
// 	},
// 	mutations: {
// 		allEvents(state, events) {
// 			state.allEvents = events;
// 			state.filterEvents = events;
// 			console.log(state.allEvents);
// 		},
// 		changeTokenState(state, token) {
// 			state.token = token;
// 			state.errorMessage = null;
// 			console.log(state.token, 'Change token state');
// 			console.log(localStorage.getItem('token'), 'show localstorage');
// 		},

// 		changeUserState(state, user) {
// 			state.user = user;
// 			state.newEvent.createdBy = user.username;
// 		},
// 		statusMessage(state, response) {
// 			state.statusMessage = response;
// 		},
// 		filterEventMutation(state) {
// 			const filterEventTag = state.filterEventTag;
// 			const filterEvent = state.filterEvents;
// 			let foundEvents = [];

// 			foundEvents = filterEvent.filter(item =>
// 				item.typeOfEvent.match(filterEventTag)
// 			);
// 			state.allEvents = foundEvents;
// 		},
// 		resetFilter(state) {
// 			state.allEvents = state.filterEvents;
// 		}
// 	},
//  getters = {
//   getField,
//   isLoggedIn: state => state.token,
//   user: state => state.user,
//   statusMessage: state => state.statusMessage
// };
// });
