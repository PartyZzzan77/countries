import {
  CLEAR_DETAILS,
  SET_COUNTRY,
  SET_ERROR,
  SET_LOADING,
  SET_SIBLINGS,
} from './details-actions';

const initState = {
  currentCountry: null,
  siblings: [],
  status: 'idle',
  error: null,
};

export const detailsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_COUNTRY:
      return {
        ...state,
        status: 'received',
        currentCountry: payload,
      };
    case SET_LOADING:
      return {
        ...state,
        status: 'loading',
        error: null,
      };
    case SET_ERROR:
      return {
        ...state,
        status: 'rejected',
        error: payload,
      };
    case SET_SIBLINGS:
      return {
        ...state,
        siblings: payload,
      };
    case CLEAR_DETAILS:
      return initState;
    default:
      return state;
  }
};
