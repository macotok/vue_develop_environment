import { shallowMount } from '@vue/test-utils';
import OrHeader from '@/components/organisms/OrHeader';

describe('OrHeader test', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(OrHeader);
  });
  describe('props', () => {
    test('propsが受け取れること', () => {
      wrapper.setProps({
        title: 'hello title',
      });
      expect(wrapper.props().title).toBe('hello title');
    });
  });
  describe('template', () => {
    test('titleがレンダリングされること', () => {
      wrapper.setProps({
        title: 'hello title',
      });
      expect(wrapper.text()).toBe('hello title');
    });
  });
});
