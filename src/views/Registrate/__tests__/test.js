// Utilities
import { mount, createLocalVue } from '@vue/test-utils';
// Libraries
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
// Components
import Registrate from '@/views/Registrate/Registrate.vue';

const localVue = createLocalVue();
localVue.use(Vuex, VueRouter);

jest.mock('vuex-map-fields', () => ({
  mapFields: jest.fn()
}));

describe('/registrate', () => {
  let vuetify;
  beforeEach(() => {
    Vue.use(Vuetify);
    vuetify = new Vuetify();
  });
  test('Test id Registrate is rendered', () => {
    // Arrange;
    const wrapper = mount(Registrate, {
      localVue,
      vuetify
    });
    // Assert
    expect(wrapper.element).toMatchSnapshot();
  });

  test('It should activate registration on click', () => {
    const actions = {
      registration: jest.fn()
    };
    const store = new Vuex.Store({
      actions
    });

    // Arrange;
    const wrapper = mount(Registrate, {
      localVue,
      vuetify,
      store
    });

    const button = wrapper.find('.v-btn');
    expect(actions.registration).toHaveBeenCalledTimes(0);
    button.trigger('click');
    expect(actions.registration).toHaveBeenCalledTimes(1);
  });
});
