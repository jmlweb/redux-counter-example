/**
 * ACTION TYPES
 */
export const COUNTER_RESET = 'COUNTER/RESET';
export const COUNTER_ASYNC_RESET = 'COUNTER/ASYNC_RESET';
export const COUNTER_ADD = 'COUNTER/ADD';

/**
 * ACTIONS
 */
export const counterReset = () => ({
  type: COUNTER_RESET,
});

export const counterAsyncReset = () => (dispatch) => {
  dispatch({ type: COUNTER_ASYNC_RESET });
  setTimeout(() => {
    dispatch(counterReset());
  }, 1000);
};

export const counterAdd = (payload = 1) => ({
  type: COUNTER_ADD,
  payload: Math.min(payload, 5),
});

export default {
  counterReset,
  counterAsyncReset,
  counterAdd,
};
