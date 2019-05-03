import { shallowMount } from '@vue/test-utils';
import OrHeader from '@/components/organisms/OrHeader';

describe('OrHeader test', () => {
  let wrapper;
  beforeEach(() => {
    const requiredProps = { title: 'hello title' };
    wrapper = shallowMount(OrHeader, { propsData: requiredProps });
  });
  describe('props', () => {
    test('propsが受け取れること', () => {
      wrapper.setProps({
        title: 'hello title',
      });
      expect(wrapper.vm.$props.title).toBe('hello title');
    });
    test('requiredがtrueになっていること', () => {
      expect(wrapper.vm.$options.props.title.required).toBe(true);
    });
  });
});
