import actions from '@/store/actions';

describe('actions test', () => {
  test('action01', () => {
    const { action01 } = actions;
    const payload = {
      value: 'test inputText',
      name: 'test actionName',
    };
  });
});
