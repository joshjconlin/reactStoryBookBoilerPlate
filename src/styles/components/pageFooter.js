import { fromJS } from 'immutable';
import typography from '../theme/typography';

export default fromJS({
  backgroundColor: '#ffffff',
  padding: 32,
  color: '#B5B5B5',
  fontSize: typography.getIn(['subheader', 'fontSize']),
});
