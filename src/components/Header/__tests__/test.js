// Utilities
import { mount, createLocalVue } from '@vue/test-utils';
// Libraries
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
// Components
import Header from '@/components/Header/Header.vue';

const localVue = createLocalVue();
localVue.use(Vuex, VueRouter);

describe('Header component', () => {
  let vuetify;
  beforeEach(() => {
    Vue.use(Vuetify);
    vuetify = new Vuetify();
  });

  // const store = new Vuex.Store({
  //   state: { token: localStorage.getItem('token') || '' },
  //   getters: {
  //     isLoggedIn: state => state.token,
  //     user: state => state.user
  //   }
  // });

  test('test if the right buttons links is displayed when not logged in', async () => {
    const store = new Vuex.Store({
      state: { token: localStorage.getItem('token') || '' },
      getters: {
        isLoggedIn: state => state.token
      }
    });
    const wrapper = mount(Header, {
      localVue,
      vuetify,
      store
    });

    const loginLink = wrapper.find('#loginLink');
    const registrateLink = wrapper.find('#registrateLink');

    expect(loginLink.exists()).toBe(true);
    expect(registrateLink.exists()).toBe(true);
  });
  test('test if the right buttons links is displayed when logged in', async () => {
    const store = new Vuex.Store({
      state: { token: true },
      getters: {
        isLoggedIn: state => state.token
      }
    });
    const wrapper = mount(Header, {
      localVue,
      vuetify,
      store
    });

    const neweventLink = wrapper.find('#neweventLink');
    const userLink = wrapper.find('#userLink');

    expect(neweventLink.exists()).toBe(true);
    expect(userLink.exists()).toBe(true);
  });
});
