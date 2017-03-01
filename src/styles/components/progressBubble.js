import { fromJS } from 'immutable';
import palette from '../theme/palette';
import typography from '../theme/typography';

export default fromJS({
  primaryFill: palette.get('successColor'),
  secondaryFill: palette.get('warningColor'),
  textColor: palette.get('textColor'),
  fontSize: typography.getIn(['sizes', 'subtitle']),
});
