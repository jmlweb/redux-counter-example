import { COUNTER_RESET, COUNTER_ADD, COUNTER_SUBTRACT } from '../actions';

const initialState = {
  current: 0,
};

const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case COUNTER_RESET:
      return initialState;
    default:
      return state;
  }
};

export default counterReducer;
