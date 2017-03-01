import { fromJS } from 'immutable';
import palette from './palette';

export default fromJS({
  zDepth1: {
    shadowRadius: 3,
    shadowOpacity: 0.4,
    shadowColor: palette.get('primary3Color'),
    shadowOffset: { width: 0, height: 0 },
  },
  zDepth2: {
    shadowRadius: 6,
    shadowOpacity: 0.4,
    shadowColor: palette.get('primary3Color'),
    shadowOffset: { width: 0, height: 0 },
  },
  zDepth3: {
    shadowRadius: 12,
    shadowOpacity: 0.4,
    shadowColor: palette.get('primary3Color'),
    shadowOffset: { width: 0, height: 0 },
  },
  zDepth4: {
    shadowRadius: 16,
    shadowOpacity: 0.4,
    shadowColor: palette.get('primary3Color'),
    shadowOffset: { width: 0, height: 0 },
  },
  zDepth5: {
    shadowRadius: 24,
    shadowOpacity: 0.4,
    shadowColor: palette.get('primary3Color'),
    shadowOffset: { width: 0, height: -2 },
  },
});
