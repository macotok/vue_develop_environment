import { shallowMount } from '@vue/test-utils';
import AtLabel from '@/components/atoms/form/AtLabel';

describe('AtLabel', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(AtLabel, {
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
