import { connect } from 'react-redux';
import { charactersSelector, spinnerStatus } from '../../store/nodes/api/dashboard/selectors';
import { getDashboard } from '../../store/nodes/api/dashboard/actions';

export const withReduxConnect = connect(
  (state) => ({ isLoading: spinnerStatus(state), characters: charactersSelector(state) }),
  { getDashboard }
);
