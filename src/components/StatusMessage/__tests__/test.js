// Utilities
import { mount, createLocalVue } from '@vue/test-utils';
// Libraries
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
// Components
import StatusMessage from '@/components/StatusMessage/StatusMessage.vue';

const localVue = createLocalVue();
localVue.use(Vuex, VueRouter);

describe('StatusMessage component', () => {
  let vuetify;
  beforeEach(() => {
    Vue.use(Vuetify);
    vuetify = new Vuetify();
  });
  test('test if Foter is rendered', () => {
    const store = new Vuex.Store({
      state: { statusMessage: 'warning' },
      getters: {
        statusMessage: state => state.statusMessage
      }
    });
    // Arrange;
    const wrapper = mount(StatusMessage, {
      localVue,
      vuetify,
      store
    });
    // Assert
    const statusMessageText = wrapper.find('#statusMessageText');
    expect(statusMessageText.text()).toBe('warning');
  });
});
