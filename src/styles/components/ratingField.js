import { fromJS } from 'immutable';
import palette from '../theme/palette';

export default fromJS({
  colorEmpty: '#A9A9A9',
  colorFull: palette.get('primary1Color'),
  colorDisabled: '#A9A9A9',
});
