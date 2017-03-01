import { fromJS } from 'immutable';

import palette from '../theme/palette';
import typography from '../theme/typography';

export default fromJS({

  /* Input Element */
  borderWidth: 1,
  backgroundColor: palette.get('white'),
  borderColor: palette.get('primary2Color'),
  inputFontSize: 10,

  /* Label */
  labelFontFamily: typography.get('secondaryFontFamily'),
  labelFontSize: 17,
  activeLabelColor: palette.get('primary1Color'),
  inactiveLabelColor: palette.get('inactiveGrey'),

  /* Error Message */
  errorMessageFontSize: 12,
  errorMessageColor: palette.get('warningColor'),

});
