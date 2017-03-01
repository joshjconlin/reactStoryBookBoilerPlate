import { fromJS } from 'immutable';
import typography from '../theme/typography';
import palette from '../theme/palette';

export default fromJS({
  title: {
    fontFamily: typography.get('secondaryFontFamily'),
    fontSize: 22,
    fontWeight: '900',
    color: palette.get('textColor'),
  },
});
