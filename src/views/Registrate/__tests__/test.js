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
import Registrate from '@/views/Registrate/Registrate.vue';

const localVue = createLocalVue();
localVue.use(Vuex, VueRouter);

describe('/registrate', () => {
  let vuetify;

  beforeEach(() => {
    Vue.use(Vuetify);
    vuetify = new Vuetify();
  });

  test('Test if Registrate is rendered', () => {
    // Arrange;
    const wrapper = mount(Registrate, {
      localVue,
      vuetify,
      store
    });
    // Assert
    expect(wrapper.element).toMatchSnapshot();
  });

  test('It should pass data to state.newEvent', async () => {
    // Arrange;
    const store = new Vuex.Store({
      state: {
        newUser: {
          name: '',
          username: '',
          email: '',
          password: '',
          verifypassword: ''
        }
      },
      mutations: { updateField },
      getters: { getField }
    });
    const wrapper = mount(Registrate, {
      localVue,
      vuetify,
      store
    });
    const inputUserName = wrapper.find('#inputUserName');
    const inputName = wrapper.find('#inputName');
    const inputEmail = wrapper.find('#inputEmail');
    const inputPassword = wrapper.find('#inputPassword');
    const inputVerifypassword = wrapper.find('#inputVerifypassword');

    inputUserName.setValue('Artur');
    inputName.setValue('Stockholm');
    inputEmail.setValue('Its always cool to have a cape');
    inputPassword.setValue('pass');
    inputVerifypassword.setValue('pass');
    await wrapper.vm.$nextTick();

    expect(store.state.newUser.username).toBe(inputUserName.element.value);
    expect(store.state.newUser.name).toBe(inputName.element.value);
    expect(store.state.newUser.email).toBe(inputEmail.element.value);
    expect(store.state.newUser.password).toBe(inputPassword.element.value);
    expect(store.state.newUser.verifypassword).toBe(
      inputVerifypassword.element.value
    );
  });
});
