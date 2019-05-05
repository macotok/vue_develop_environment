export const SAMPLE_ACTION01 = 'SAMPLE_ACTION01';

const actions = {
  action01(context, payload) {
    context.commit(SAMPLE_ACTION01, payload);
  },
};

export default actions;
