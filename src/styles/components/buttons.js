import { fromJS } from 'immutable';
import spacing from '../theme/spacing';
import palette from '../theme/palette';

export default fromJS({
  disabledColor: palette.get('primary3Color'),
  disabledTextColor: palette.get('textColor'),

  primary: {
    color: palette.get('primary1Color'),
    textColor: palette.get('alternateTextColor'),
  },

  secondary: {
    color: palette.get('accent1Color'),
    textColor: palette.get('alternateTextColor'),
  },

  warning: {
    color: palette.get('warningColor'),
    textColor: palette.get('alternateTextColor'),
  },

  small: {
    paddingVertical: spacing.get('paddingSmall'),
    paddingHorizontal: spacing.get('paddingSmall') * 2,
    fontSize: 10,
  },
  medium: {
    paddingVertical: spacing.get('paddingMedium'),
    paddingHorizontal: spacing.get('paddingMedium') * 2,
    fontSize: 14,
  },
  large: {
    paddingVertical: spacing.get('paddingLarge'),
    paddingHorizontal: spacing.get('paddingLarge') * 2,
    fontSize: 16,
  },
});
