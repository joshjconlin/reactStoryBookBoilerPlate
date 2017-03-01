import { fromJS } from 'immutable';
import palette from '../theme/palette';

export default fromJS({
  tableHeader: {
    backgroundColor: palette.get('primary1Color'),
    color: palette.get('alternateTextColor'),
    fontSize: 18,
  },
  tableFooter: {
    backgroundColor: 'transparent',
  },
});
