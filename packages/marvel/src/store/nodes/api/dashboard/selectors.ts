import { createSelector } from 'reselect';
import { propOr, prop } from 'ramda';
import { apiSelector } from '../selectors';

export const dashboardSelectors = createSelector(apiSelector, propOr({}, 'dashboard'));

export const dataSelector = createSelector(dashboardSelectors, propOr({}, 'data'));

export const charactersSelector = createSelector(dataSelector, propOr([], 'characters'));

export const spinnerStatus = createSelector(dashboardSelectors, prop('isLoading'));
