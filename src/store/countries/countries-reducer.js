import { SET_COUNTRIES, SET_ERROR, SET_LOADING } from './countries-actions';
const initState = {
  status: 'idle', //loading | received | rejected
  list: [],
  error: null,
};

export const countriesReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_COUNTRIES:
      return {
        ...state,
        status: 'received',
        list: payload,
      };

    case SET_ERROR:
      return {
        ...state,
        status: 'rejected',
        error: payload,
      };

    case SET_LOADING:
      return {
        ...state,
        status: 'loading',
        error: null,
      };
    default:
      return state;
  }
};
