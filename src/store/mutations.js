import { SAMPLE_ACTION01, SAMPLE_ACTION02 } from './actions';

const mutations = {
  [SAMPLE_ACTION01](state, inputData) {
    const data = state;
    data.label01 = inputData;
  },
  [SAMPLE_ACTION02](state, inputData) {
    const data = state;
    data.label02 = inputData;
  },
};

export default mutations;
