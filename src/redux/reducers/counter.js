import { COUNTER_RESET, COUNTER_ASYNC_RESET, COUNTER_ADD, COUNTER_ADD_RANDOM } from '../actions';

const initialState = {
  current: 0,
  text: 0,
};

const fromZero = v => (v > 0 ? v : 0);

const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case COUNTER_RESET:
      return initialState;
    case COUNTER_ASYNC_RESET:
      return { ...state, text: 'borrando' };
    case COUNTER_ADD:
      return {
        ...state,
        current: fromZero(state.current + payload),
        text: fromZero(state.current + payload),
      };
    case COUNTER_ADD_RANDOM:
      return { ...state, text: 'cargando' };
    default:
      return state;
  }
};

export default counterReducer;
