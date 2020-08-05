import { combineReducers } from 'redux';

import { dashboardReducer } from './dashboard/reducer';

export const apiReducer = combineReducers({
  dashboard: dashboardReducer
});
