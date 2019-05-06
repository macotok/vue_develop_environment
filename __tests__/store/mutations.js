import mutations from '@/store/mutations';

describe('SAMPLE_ACTION01 test', () => {
  test('SAMPLE_ACTION01のactionでstateを更新する', () => {
    const inputData = {
      name: 'label01',
      value: 'test inputText',
    };
    const state = {
      label01: '',
    };

    mutations.SAMPLE_ACTION01(state, inputData);

    expect(state).toEqual({
      label01: 'test inputText',
    });
  });
});
