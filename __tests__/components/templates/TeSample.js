import { shallowMount } from '@vue/test-utils';
import TeSample from '@/components/templates/TeSample';

describe('TeSample test', () => {
  let wrapper;
  beforeEach(() => {
    const requiredProps = {
      label01: 'test label01',
      label02: 'test label02',
    };
    wrapper = shallowMount(TeSample, { propsData: requiredProps });
  });
  describe('props', () => {
    test('propsを受け取れること', () => {
      wrapper.setProps({
        label01: 'test label01',
        label02: 'test label02',
      });
      expect(wrapper.vm.$props.label01).toBe('test label01');
      expect(wrapper.vm.$props.label02).toBe('test label02');
    });
    test('propsの型が期待しているとおりか', () => {
      expect(typeof wrapper.vm.$props.label01).toBe('string');
      expect(typeof wrapper.vm.$props.label02).toBe('string');
    });
    test('requiredがtrueであること', () => {
      expect(wrapper.vm.$options.props.label01.required).toBe(true);
      expect(wrapper.vm.$options.props.label02.required).toBe(true);
    });
  });
});
