import { fromJS } from 'immutable';
import chroma from 'chroma-js';
import palette from '../theme/palette';

export default fromJS({
  thickness: 1,
  backgroundColor: chroma(palette.get('primary3Color')).brighten(3).css(),
});
