import actions, { SAMPLE_ACTION01 } from '@/store/actions';

describe('actions test', () => {
  test('action01のcommitでデータを渡せるかどうか', () => {
    const commit = jest.fn();
    const { action01 } = actions;
    const payload = {
      name: 'test name',
      value: 'test value',
    };
    action01({ commit }, payload);

    expect(commit).toHaveBeenCalledWith(SAMPLE_ACTION01, payload);
  });
});
