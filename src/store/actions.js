import Axios from 'axios';
import router from '../router/index';

//***********************/
//*** GLOBAL ACTIONS ***/
//*********************/
const actions = {
  async login({ state, commit, dispatch }) {
    Axios.post('http://localhost:5000/api/users/login', state.login)
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
    Axios.get('http://localhost:5000/api/users/profile')
      .then(res => {
        const user = res.data.user;
        commit('changeUserState', user);
      })
      .catch(error => {
        console.log(error.response);
      });
  },
  async registration({ state, dispatch }) {
    Axios.post('http://localhost:5000/api/users/register', state.newUser)
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
    Axios.post('http://localhost:5000/api/events/commentingevent', {
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
  async attendingToEvent({ state, dispatch }) {
    console.log(state.user.username);
    const userName = state.user.username;
    const eventId = '5f69d7c2568199adb10d910f';
    Axios.post('http://localhost:5000/api/events/attending', {
      userName,
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
  async likeEvent({ state, dispatch }) {
    console.log(state.user.username);
    const userName = state.user.username;
    const eventId = '5f69d7c2568199adb10d910f';
    Axios.post('http://localhost:5000/api/events/like', {
      userName,
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
  async getEvents({ commit }) {
    Axios.get('http://localhost:5000/api/events/all')
      .then(async res => {
        const events = res.data.events[0];
        commit('allEvents', events);
      })
      .catch(error => {
        console.log(error.response);
      });
  },
  async newEvent({ state, dispatch }) {
    Axios.post('http://localhost:5000/api/events/register', state.newEvent)
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
  }
};

export default actions;
