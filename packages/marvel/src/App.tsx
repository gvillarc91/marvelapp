import React from 'react';
import { Dashboard } from './screens/Dashboard';
import { Provider } from 'react-redux';

import store from './store';

const App = () => (
  <Provider store={store()}>
    <Dashboard />
  </Provider>
);

export default App;
