import { fromJS } from 'immutable';
import chroma from 'chroma-js';

import palette from '../theme/palette';

export default fromJS({

  fontSize: 24,

  backgroundColor: chroma(palette.get('primary1Color')).brighten(1).css(),

  buttonBackgroundColor: chroma(palette.get('primary2Color')).darken(1.5).css(),
  buttonTextColor: palette.get('alternateTextColor'),
  buttonWidth: 400,
});
