import { shallowMount } from '@vue/test-utils';
import MoInputText from '@/components/molecules/MoInputText';

describe('MoInputText test', () => {
  let wrapper;
  beforeEach(() => {
    const requiredProps = { actionType: 'test actionType' };
    wrapper = shallowMount(MoInputText, {
      propsData: requiredProps,
      slots: {
        default: '<div data-test="slotContent">slot content</div>',
      },
    });
  });
  describe('props', () => {
    test('propsを受け取れること', () => {
      wrapper.setProps({
        actionType: 'test actionType',
      });
      expect(wrapper.vm.$props.actionType).toBe('test actionType');
    });
    test('型が期待しているとおりか', () => {
      expect(typeof wrapper.vm.$props.actionType).toBe('string');
    });
    test('requiredがtrueになっていること', () => {
      expect(wrapper.vm.$options.props.actionType.required).toBe(true);
    });
  });
  describe('slot', () => {
    test('slotにコンテンツが挿入できること', () => {
      const slotContent = wrapper.find('[data-test="slotContent"]');
      expect(slotContent.exists()).toBe(true);
      expect(slotContent.text()).toBe('slot content');
    });
  });
});
