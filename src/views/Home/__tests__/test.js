import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Home from '@/views/Home/Home.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('/', () => {
  test('Test if Home is rendered with a snapshot', () => {
    //Arrange
    const wrapper = shallowMount(Home, { localVue });
    //Assert
    expect(wrapper.element).toMatchSnapshot();
  });
});
