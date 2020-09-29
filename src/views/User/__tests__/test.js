// Utilities
import { mount, createLocalVue } from '@vue/test-utils';
// Libraries
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
// Components
import User from '@/views/User/User.vue';

const localVue = createLocalVue();
localVue.use(Vuex, VueRouter);

jest.mock('vuex-map-fields', () => ({
  mapFields: jest.fn()
}));

describe('/user', () => {
  const store = new Vuex.Store({
    state: { user: 'Artur' },
    getters: {
      user: state => state.user
    }
  });

  let vuetify;
  beforeEach(() => {
    Vue.use(Vuetify);
    vuetify = new Vuetify();
  });
  test('Test id User is rendered', () => {
    // Arrange;
    const wrapper = mount(User, {
      localVue,
      vuetify,
      store
    });
    // Assert
    expect(wrapper.element).toMatchSnapshot();
  });
});
