import { shallowMount } from '@vue/test-utils';
import AtButton from '@/components/atoms/form/AtButton';

describe('AtButton test', () => {
  const wrapper = shallowMount(AtButton);
  describe('v-on', () => {
    test('clickでclickButtonメソッドが実行されること', () => {
      const stub = jest.fn();
      wrapper.setMethods({
        clickButton: stub,
      });
      wrapper.trigger('click');
      expect(stub).toHaveBeenCalled();
    });
  });
});
