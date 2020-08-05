import { GET_DASHBOARD_SUCCESS, GET_DASHBOARD_FAILURE, GET_DASHBOARD_REQUEST } from './types';

export const initialState = {
  data: {},
  isLoading: false,
  error: null
};

export const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DASHBOARD_REQUEST:
      return { ...state, isLoading: true };
    case GET_DASHBOARD_SUCCESS:
      return { ...state, data: action.data, isLoading: false };

    case GET_DASHBOARD_FAILURE:
      return { ...state, error: 'Error', isLoading: false };

    default:
      return state;
  }
};
