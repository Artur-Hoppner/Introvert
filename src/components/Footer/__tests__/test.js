// Utilities
import { mount, createLocalVue } from '@vue/test-utils';
// Libraries
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
// Components
import Footer from '@/components/Footer/Footer.vue';

const localVue = createLocalVue();
localVue.use(Vuex, VueRouter);

describe('Footer component', () => {
  const store = new Vuex.Store({
    getters: {
      statusMessage: state => state.statusMessage
    }
  });
  let vuetify;
  beforeEach(() => {
    Vue.use(Vuetify);
    vuetify = new Vuetify();
  });
  test('test if Foter is rendered', () => {
    // Arrange;
    const wrapper = mount(Footer, {
      localVue,
      vuetify,
      store
    });
    // Assert
    expect(wrapper.element).toMatchSnapshot();
  });
});
