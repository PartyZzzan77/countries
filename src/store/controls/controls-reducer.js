import { CLEAR_CONTROLS, SET_REGION, SET_SEARCH } from './controls-actions';

const initState = {
  search: '',
  region: '',
};

export const controlsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_SEARCH:
      return {
        ...state,
        search: payload,
      };
    case SET_REGION:
      return {
        ...state,
        region: payload,
      };
    case CLEAR_CONTROLS:
      return initState;
    default:
      return state;
  }
};
