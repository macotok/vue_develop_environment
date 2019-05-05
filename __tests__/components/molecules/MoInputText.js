import { shallowMount } from '@vue/test-utils';
import MoInputText from '@/components/molecules/MoInputText';

describe('MoInputText test', () => {
  let wrapper;
  beforeEach(() => {
    const requiredProps = {
      actionType: 'test actionType',
      name: 'test name',
    };
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
        name: 'test name',
      });
      expect(wrapper.vm.$props.actionType).toBe('test actionType');
      expect(wrapper.vm.$props.name).toBe('test name');
    });
    test('型が期待しているとおりか', () => {
      expect(typeof wrapper.vm.$props.actionType).toBe('string');
      expect(typeof wrapper.vm.$props.name).toBe('string');
    });
    test('requiredがtrueになっていること', () => {
      expect(wrapper.vm.$options.props.actionType.required).toBe(true);
      expect(wrapper.vm.$options.props.name.required).toBe(true);
    });
  });
  describe('slot', () => {
    test('slotにコンテンツが挿入できること', () => {
      const slotContent = wrapper.find('[data-test="slotContent"]');
      expect(slotContent.exists()).toBe(true);
      expect(slotContent.text()).toBe('slot content');
    });
  });
  describe('mount', () => {
    test('input-textイベントがemitされたときにeventHandleが呼ばれること', () => {
      const stub = jest.fn();
      wrapper.setMethods({
        eventHandle: stub,
      });
      wrapper.vm.eventHandle();
      expect(stub).toHaveBeenCalled();
    });
    test('input-textイベントがemitされたたときに値が渡されること', () => {
      const stub = jest.fn();
      wrapper.setMethods({
        eventHandle: stub,
      });
      wrapper.vm.eventHandle('inputValue');
      expect(stub).toBeCalledWith('inputValue');
    });
  });
});
