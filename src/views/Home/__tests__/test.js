// Utilities
import { mount, createLocalVue } from '@vue/test-utils';
// Libraries
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
// Components
import NewEvent from '@/views/Home/Home.vue';

const localVue = createLocalVue();
localVue.use(Vuex, VueRouter);

jest.mock('vuex-map-fields', () => ({
  getterType: jest.fn(),
  mapFields: jest.fn()
}));

describe('/', () => {
  const store = new Vuex.Store({
    state: {
      allEvents: ''
    }
  });

  let vuetify;
  beforeEach(() => {
    Vue.use(Vuetify);
    vuetify = new Vuetify();
  });

  test('Test if Home is rendered', () => {
    // Arrange;
    const wrapper = mount(NewEvent, {
      localVue,
      vuetify,
      store
    });
    // Assert
    expect(wrapper.element).toMatchSnapshot();
  });
});
