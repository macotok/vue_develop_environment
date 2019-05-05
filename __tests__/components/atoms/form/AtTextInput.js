import { shallowMount } from '@vue/test-utils';
import AtTextInput from '@/components/atoms/form/AtTextInput';

describe('AtTextInput', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(AtTextInput);
  });
  describe('template', () => {
    describe('v-on', () => {
      test('inputでinputTextメソッドが実行されること', () => {
        const stub = jest.fn();
        wrapper.setMethods({
          inputText: stub,
        });
        wrapper.trigger('input');
        expect(stub).toHaveBeenCalled();
      });
    });
  });
  describe('methods', () => {
    describe('inputText', () => {
      test('input-textイベントがemitされること', () => {
        wrapper.vm.inputText({ target: { value: 'inputValue' } });
        expect(wrapper.emitted('input-text')).not.toBeUndefined();
      });
      test('input-textイベントのemitで値が渡されること', () => {
        wrapper.vm.inputText({ target: { value: 'inputValue' } });
        expect(wrapper.emitted('input-text')[0][0].target.value).toBe('inputValue');
      });
    });
  });
});
