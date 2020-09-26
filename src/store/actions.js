import Axios from 'axios';
import router from '../router/index';

let url;
if (process.env.NODE_ENV === 'development') {
  url = 'http://localhost:5000/api';
} else {
  url = 'https://incognito-backend.herokuapp.com/api';
}
const api = Axios.create({
  baseURL: url
});
//***********************/
//*** GLOBAL ACTIONS ***/
//*********************/
const actions = {
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
};

export default actions;
