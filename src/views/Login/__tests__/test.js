// Utilities
import { mount, createLocalVue } from '@vue/test-utils';
import { getField, updateField } from 'vuex-map-fields';
import store from '@/store/index.js';
// Libraries
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
// Components
import Login from '@/views/Login/Login.vue';

const localVue = createLocalVue();
localVue.use(Vuex, VueRouter);

describe('/login', () => {
  let vuetify;

  beforeEach(() => {
    Vue.use(Vuetify);
    vuetify = new Vuetify();
  });

  test('Test if Login is rendered', () => {
    // Arrange;
    const wrapper = mount(Login, {
      localVue,
      vuetify,
      store
    });
    // Assert
    expect(wrapper.element).toMatchSnapshot();
  });

  test('It should activate login on click', () => {
    const actions = {
      login: jest.fn()
    };
    const store = new Vuex.Store({
      state: {
        login: {
          username: '',
          password: ''
        }
      },
      actions,
      mutations: { updateField },
      getters: { getField }
    });

    // Arrange;
    const wrapper = mount(Login, {
      localVue,
      vuetify,
      store
    });

    const button = wrapper.find('.v-btn');
    wrapper.vm.$on('login');
    expect(actions.login).toHaveBeenCalledTimes(0);
    button.trigger('click');
    expect(actions.login).toHaveBeenCalledTimes(1);
  });

  test('It should pass data to state.login', async () => {
    // Arrange;
    const store = new Vuex.Store({
      state: {
        login: {
          username: '',
          password: ''
        }
      },
      mutations: { updateField },
      getters: { getField }
    });
    const wrapper = mount(Login, {
      localVue,
      vuetify,
      store
    });
    const inputUserName = wrapper.find('#inputUserName');
    const inputPassword = wrapper.find('#inputPassword');

    inputUserName.setValue('Artur');
    inputPassword.setValue('password');
    await wrapper.vm.$nextTick();

    expect(store.state.login.username).toBe(inputUserName.element.value);
    expect(store.state.login.password).toBe(inputPassword.element.value);
  });
});
