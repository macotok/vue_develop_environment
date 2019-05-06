import Vuex from 'vuex';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import AtField from '@/components/atoms/form/AtField';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('AtField test', () => {
  let wrapper;
  const mockStore = {
    dispatch: jest.fn(),
  };
  beforeEach(() => {
    const requiredProps = {
      actionType: 'test actionType',
      name: 'test name',
    };
    wrapper = shallowMount(AtField, {
      propsData: requiredProps,
      slots: {
        default: '<div data-test="slotContent">slot content</div>',
      },
      mocks: {
        $store: mockStore,
      },
      localVue,
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
    test('input-textイベントがemitされたときにinputTextが呼ばれること', () => {
      const stub = jest.fn();
      wrapper.setMethods({
        inputText: stub,
      });
      wrapper.vm.inputText();
      expect(stub).toHaveBeenCalled();
    });
    test('input-textイベントがemitされたたときに値が渡されること', () => {
      const stub = jest.fn();
      wrapper.setMethods({
        inputText: stub,
      });
      wrapper.vm.inputText('inputValue');
      expect(stub).toBeCalledWith('inputValue');
    });
    test('input-textメソッドがemitされたときにdispatchで値が渡されること', () => {
      wrapper.setProps({
        actionType: 'test actionType',
        name: 'test name',
      });
      wrapper.vm.inputText({ target: { value: 'inputValue' } });
      expect(mockStore.dispatch).toHaveBeenCalledWith(
        'test actionType', {
          value: 'inputValue',
          name: 'test name',
        },
      );
    });
  });
});
