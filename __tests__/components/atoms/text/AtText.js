import { shallowMount } from '@vue/test-utils';
import AtText from '@/components/atoms/text/AtText';

describe('AtText test', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(AtText, {
      slots: {
        default: '<div data-test="slotContent">slot content</div>',
      },
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
