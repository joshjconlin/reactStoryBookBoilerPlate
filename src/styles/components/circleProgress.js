import { fromJS } from 'immutable';
import typography from '../theme/typography';
import palette from '../theme/palette';

export default fromJS({
  unfilledRingColor: palette.get('canvasColor'),
  filledRingColor: palette.get('successColor'),
  strokeWidth: 10,
  progressText: {
    color: palette.get('primary4Color'),
    fontSize: 16,
    fontWeight: 400,
  },
  progressHeading: {
    color: palette.get('primary4Color'),
    fontSize: 38,
    fontWeight: 400,
  },
  messageText: {
    color: palette.get('textColor'),
    fontSize: typography.getIn(['sizes', 'subtitle']),
  },
});

