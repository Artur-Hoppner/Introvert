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
import NewEvent from '@/views/NewEvent/NewEvent.vue';

const localVue = createLocalVue();
localVue.use(Vuex, VueRouter);

describe('/newEvent', () => {
  let vuetify;

  beforeEach(() => {
    Vue.use(Vuetify);
    vuetify = new Vuetify();
  });

  test('Test if newEvent is rendered', () => {
    // Arrange;
    const wrapper = mount(NewEvent, {
      localVue,
      vuetify,
      store
    });
    // Assert
    expect(wrapper.element).toMatchSnapshot();
  });

  test('It should activate newEvent on click', () => {
    const actions = {
      newEvent: jest.fn()
    };
    const store = new Vuex.Store({
      state: {
        newEvent: {
          name: '',
          place: '',
          description: '',
          date: '',
          typeOfEvent: '',
          createdBy: ''
        }
      },
      actions,
      mutations: { updateField },
      getters: { getField }
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
  test('It should pass data to state.newEvent', async () => {
    // Arrange;
    const store = new Vuex.Store({
      state: {
        newEvent: {
          name: '',
          place: '',
          description: '',
          date: '',
          typeOfEvent: '',
          createdBy: ''
        }
      },
      mutations: { updateField },
      getters: { getField }
    });
    const wrapper = mount(NewEvent, {
      localVue,
      vuetify,
      store
    });
    const inputName = wrapper.find('#inputName');
    const inputPlace = wrapper.find('#inputPlace');
    const inputDescription = wrapper.find('#inputDescription');

    inputName.setValue('Phanton of the opera');
    inputPlace.setValue('Stockholm');
    inputDescription.setValue('Its always cool to have a cape');
    await wrapper.vm.$nextTick();

    expect(store.state.newEvent.name).toBe(inputName.element.value);
    expect(store.state.newEvent.place).toBe(inputPlace.element.value);
    expect(store.state.newEvent.description).toBe(
      inputDescription.element.value
    );
  });
});
