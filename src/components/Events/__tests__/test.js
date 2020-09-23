import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Landing from '@/components/Events/Events.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('/', () => {
  test('Test if Home is rendered with a snapshot', () => {
    //Arrange
    const wrapper = shallowMount(Landing, { localVue });
    //Assert
    expect(wrapper.element).toMatchSnapshot();
  });
});
