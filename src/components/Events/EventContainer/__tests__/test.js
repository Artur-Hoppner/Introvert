// Utilities
import { mount, createLocalVue } from '@vue/test-utils';
// Libraries
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
// Components
import EventContainer from '@/components/Events/EventContainer/EventContainer.vue';

const localVue = createLocalVue();
localVue.use(Vuex, VueRouter);

describe('EventContainer component', () => {
  let vuetify;
  beforeEach(() => {
    Vue.use(Vuetify);
    vuetify = new Vuetify();
  });

  const store = new Vuex.Store({
    state: { user: 'Artur' },
    getters: {
      isLoggedIn: state => state.token,
      user: state => state.user
    }
  });
  const event = {
    participant: ['Lova', 'Marja', 'Artur'],
    likes: ['Marja', 'Artur'],
    comments: [],
    _id: '5f6e59d2e426280017acbf20',
    name: 'Nutcracker',
    place: 'Dramaten Stockholm',
    date: '2020-11-19',
    typeOfEvent: 'Ballet',
    createdBy: 'Artur',
    description: 'Se the classical Ballet by Pjotr Tjajkovskij',
    __v: 0
  };

  test('test if props value is displayed', async () => {
    const wrapper = mount(EventContainer, {
      localVue,
      vuetify,
      store,
      propsData: { event }
    });

    const eventType = wrapper.find('#typeOfEvent');
    const nameOfEvent = wrapper.find('#eventName');
    const eventPlaceDate = wrapper.find('#eventPlaceDate');
    const eventDescription = wrapper.find('#eventDescription');
    const ineventCreatedByput = wrapper.find('#eventCreatedBy');

    expect(eventType.text()).toContain(event.typeOfEvent);
    expect(nameOfEvent.text()).toContain(event.name);
    expect(eventPlaceDate.text()).toContain(event.place);
    expect(eventDescription.text()).toContain(event.description);
    expect(ineventCreatedByput.text()).toContain(event.createdBy);
  });

  test('test if like icons & badge is toggled when v-if is true/false', async () => {
    const store = new Vuex.Store({
      state: { user: 'Artur' },
      getters: {
        isLoggedIn: state => state.token,
        user: state => state.user
      }
    });
    const wrapper = mount(EventContainer, {
      localVue,
      vuetify,
      store,
      propsData: { event }
    });

    const badgeLikeTrueUser = wrapper.find('#badgeLikeTrueUser');
    const badgeLikeFalseUser = wrapper.find('#badgeLikeFalseUser');

    expect(badgeLikeTrueUser.exists()).toBe(true);
    expect(badgeLikeFalseUser.exists()).toBe(false);
  });
  test('test if participant icons & badge is toggled when v-if is true/false', async () => {
    const store = new Vuex.Store({
      state: { user: 'Artur' },
      getters: {
        isLoggedIn: state => state.token,
        user: state => state.user
      }
    });
    const wrapper = mount(EventContainer, {
      localVue,
      vuetify,
      store,
      propsData: { event }
    });

    const badgeAttendingTrueUser = wrapper.find('#badgeAttendingTrueUser');
    const badgeAttendingfalseUser = wrapper.find('#badgeAttendingfalseUser');

    expect(badgeAttendingTrueUser.exists()).toBe(true);
    expect(badgeAttendingfalseUser.exists()).toBe(false);
  });
});
