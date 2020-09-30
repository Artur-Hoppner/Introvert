// Utilities
import { mount, createLocalVue } from '@vue/test-utils';
// Libraries
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
// Components
import Carousel from '@/components/Carousel/Carousel.vue';

const localVue = createLocalVue();
localVue.use(Vuex, VueRouter);

describe('Carousel component', () => {
  let vuetify;
  beforeEach(() => {
    Vue.use(Vuetify);
    vuetify = new Vuetify();
  });
  test('test if Carousel item is there and is displayed is rendered', () => {
    // Arrange;
    const wrapper = mount(Carousel, {
      localVue,
      vuetify
    });
    // //Act
    const container = wrapper.find('.v-carousel');
    const textContent = container.text('');
    // Assert
    expect(textContent).toBe('Creativity');
  });
});
