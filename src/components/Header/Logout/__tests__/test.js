// Utilities
import { mount, createLocalVue } from '@vue/test-utils';
// Libraries
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
// Components
import Logout from '@/components/Header/Logout/Logout.vue';

const localVue = createLocalVue();
localVue.use(Vuex, VueRouter);

describe('Logout component', () => {
  let vuetify;
  beforeEach(() => {
    Vue.use(Vuetify);
    vuetify = new Vuetify();
  });

  test('test if loggout is exist when logged in', async () => {
    const store = new Vuex.Store({
      state: { token: true },
      getters: {
        isLoggedIn: state => state.token
      }
    });
    const wrapper = mount(Logout, {
      localVue,
      vuetify,
      store
    });

    const logoutLink = wrapper.find('#logoutLink');
    expect(logoutLink.exists()).toBe(true);
  });

  test('It should activate logOut on click', () => {
    const actions = {
      logOut: jest.fn()
    };
    const store = new Vuex.Store({
      state: { token: true },
      getters: {
        isLoggedIn: state => state.token
      },
      actions
    });

    // Arrange;
    const wrapper = mount(Logout, {
      localVue,
      vuetify,
      store
    });

    const button = wrapper.find('#logoutLink');
    wrapper.vm.$on('logOut');
    expect(actions.logOut).toHaveBeenCalledTimes(0);
    button.trigger('click');
    expect(actions.logOut).toHaveBeenCalledTimes(1);
  });
});
