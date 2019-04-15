import {
  shallowMount,
} from '@vue/test-utils';
import Navbar from '@/components/Navbar.vue';


describe('Navbar.vue', () => {
  it('Renders button with prop.buttonText when passed', () => {
    const buttonPath = '/';
    const buttonText = 'Go Back';
    const wrapper = shallowMount(Navbar, {
      stubs: ['router-link'],
      propsData: {
        buttonPath,
        buttonText,
      },
    });
    expect(wrapper.find('.button').text()).toMatch(buttonText);
  });
});
