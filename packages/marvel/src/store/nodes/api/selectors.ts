import { propOr } from 'ramda';

export const apiSelector = propOr({}, 'api');
