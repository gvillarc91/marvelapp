import { compose } from 'ramda';
import { withReduxConnect } from './withReduxConnect';
import Dashboard from './Dashboard';

export const DashboardContainer = compose(withReduxConnect)(Dashboard);
