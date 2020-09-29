// Utilities
import { mount, createLocalVue } from '@vue/test-utils';
// Libraries
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
// Components
import NewEvent from '@/views/NewEvent/NewEvent.vue';

const localVue = createLocalVue();
localVue.use(Vuex, VueRouter);

jest.mock('vuex-map-fields', () => ({
  mapFields: jest.fn()
}));

describe('/newevent', () => {
  let vuetify;
  beforeEach(() => {
    Vue.use(Vuetify);
    vuetify = new Vuetify();
  });

  test('Test id NewEvent is rendered', () => {
    // Arrange;
    const wrapper = mount(NewEvent, {
      localVue,
      vuetify
    });
    // Assert
    expect(wrapper.element).toMatchSnapshot();
  });
  test('It should activate newEvent on click', () => {
    const actions = {
      newEvent: jest.fn()
    };
    const store = new Vuex.Store({
      actions
    });

    // Arrange;
    const wrapper = mount(NewEvent, {
      localVue,
      vuetify,
      store
    });

    const button = wrapper.find('.v-btn');
    wrapper.vm.$on('newEvent');
    expect(actions.newEvent).toHaveBeenCalledTimes(0);
    button.trigger('click');
    expect(actions.newEvent).toHaveBeenCalledTimes(1);
  });
});
