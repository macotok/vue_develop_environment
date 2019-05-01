import { SAMPLE_ACTION01, SAMPLE_ACTION02 } from './actions';

const mutations = {
  [SAMPLE_ACTION01](state, inputData) {
    console.log(inputData);
  },
  [SAMPLE_ACTION02](state, inputData) {
    console.log(inputData);
  },
};

export default mutations;
