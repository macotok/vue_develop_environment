import { shallowMount } from '@vue/test-utils';
import AtTextInput from '@/components/atoms/form/AtTextInput';

describe('AtTextInput', () => {
  const wrapper = shallowMount(AtTextInput);
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
