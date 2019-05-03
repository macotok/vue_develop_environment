import { shallowMount } from '@vue/test-utils';
import AtTitleH1 from '@/components/atoms/text/AtTitleH1';

describe('AtTitleH1 test', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(AtTitleH1, {
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
