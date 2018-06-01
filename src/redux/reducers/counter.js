import { COUNTER_RESET, COUNTER_ADD } from '../actions';

const initialState = {
  current: 0,
};

const fromZero = v => (v > 0 ? v : 0);

const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case COUNTER_RESET:
      return initialState;
    case COUNTER_ADD:
      return { ...state, current: fromZero(state.current + payload) };
    default:
      return state;
  }
};

export default counterReducer;
