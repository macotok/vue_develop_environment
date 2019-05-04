import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Sample from '@/components/pages/Sample';

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    label01: 'label01',
  },
});

describe('Sample test', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Sample, {
      store,
      localVue,
      computed: {
        label01: () => 'label01',
      },
    });
  });
  describe('mount', () => {
    test('label01関数が呼ばれること', () => {
    });
  });
});
