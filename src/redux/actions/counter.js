/**
 * ACTION TYPES
 */
export const COUNTER_RESET = 'COUNTER/RESET';
export const COUNTER_ADD = 'COUNTER/ADD';
export const COUNTER_SUBTRACT = 'COUNTER_SUBTRACT';

/**
 * ACTIONS
 */
export const counterReset = () => ({
  type: COUNTER_RESET,
});

export const counterAdd = (payload = 1) => ({
  type: COUNTER_ADD,
  payload: Math.min(payload, 5),
});

export const counterSubtract = (payload = 1) => ({
  type: COUNTER_SUBTRACT,
  payload: Math.min(payload, 5),
});

export default {
  counterReset,
  counterAdd,
  counterSubtract,
};
