import { SAMPLE_ACTION01 } from './actions';

const mutations = {
  [SAMPLE_ACTION01](state, inputData) {
    const data = state;
    const { value, name } = inputData;
    data[name] = value;
  },
};

export default mutations;
