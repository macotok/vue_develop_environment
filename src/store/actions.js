export const SAMPLE_ACTION01 = 'SAMPLE_ACTION01';
export const SAMPLE_ACTION02 = 'SAMPLE_ACTION02';

const actions = {
  action01(context, payload) {
    context.commit(SAMPLE_ACTION01, payload);
  },
  action02(context, payload) {
    context.commit(SAMPLE_ACTION02, payload);
  },
};

export default actions;
