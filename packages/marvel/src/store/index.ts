import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import createReducer from './nodes/reducers';

export default function configureStore(initialState = {}) {
  const middleWareEnhancer = applyMiddleware(thunkMiddleware);
  const store = createStore(createReducer(), initialState, composeWithDevTools(middleWareEnhancer));

  return store;
}
