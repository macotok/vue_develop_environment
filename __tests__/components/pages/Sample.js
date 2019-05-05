import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Sample from '@/components/pages/Sample';
import TeSample from '@/components/templates/TeSample';

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    label01: 'test label01',
  },
});

describe('Sample test', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Sample, {
      store,
      localVue,
    });
  });
  describe('mount', () => {
    test('TeSampleにstateの値をpropsで渡せているかどうか', () => {
      expect(wrapper.find(TeSample).props().label01).toBe('test label01');
    });
  });
});
