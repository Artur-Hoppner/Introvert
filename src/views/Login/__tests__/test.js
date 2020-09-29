// Utilities
import { mount, createLocalVue } from '@vue/test-utils';
// Libraries
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
// Components
import Login from '@/views/Login/Login.vue';

const localVue = createLocalVue();
localVue.use(Vuex, VueRouter);

jest.mock('vuex-map-fields', () => ({
  mapFields: jest.fn()
}));

describe('/login', () => {
  let vuetify;
  beforeEach(() => {
    Vue.use(Vuetify);
    vuetify = new Vuetify();
  });
  test('Test id Login is rendered', () => {
    // Arrange;
    const wrapper = mount(Login, {
      localVue,
      vuetify
    });
    // Assert
    expect(wrapper.element).toMatchSnapshot();
  });

  test('It should activate login on click', () => {
    const actions = {
      login: jest.fn()
    };
    const store = new Vuex.Store({
      actions
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
});
