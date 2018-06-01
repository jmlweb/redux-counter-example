import axios from 'axios';

/**
 * ACTION TYPES
 */
export const COUNTER_RESET = 'COUNTER/RESET';
export const COUNTER_ASYNC_RESET = 'COUNTER/ASYNC_RESET';
export const COUNTER_ADD = 'COUNTER/ADD';
export const COUNTER_ADD_RANDOM = 'COUNTER/ADD_RANDOM';

/**
 * ACTIONS
 */
export const counterReset = () => ({
  type: COUNTER_RESET,
});

export const counterAsyncReset = () => (dispatch) => {
  dispatch({ type: COUNTER_ASYNC_RESET });
  axios.get('https://dog.ceo/api/breeds/list/all').then((response) => {
    dispatch(counterReset());
  });
};

export const counterAdd = (payload = 1) => ({
  type: COUNTER_ADD,
  payload: Math.min(payload, 15),
});

export const counterAddRandom = () => (dispatch) => {
  dispatch({ type: COUNTER_ADD_RANDOM });
  axios.get('https://dog.ceo/api/breeds/list/all').then((response) => {
    const items = Object.keys(response.data.message);
    dispatch(counterAdd(items[Math.floor(Math.random() * items.length)].length));
  });
};

export default {
  counterReset,
  counterAsyncReset,
  counterAdd,
};
