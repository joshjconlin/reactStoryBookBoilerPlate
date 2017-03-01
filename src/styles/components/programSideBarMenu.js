import { fromJS } from 'immutable';
import palette from '../theme/palette';

export default fromJS({

  item: {
    backgroundColor: '#e0eaf9',
    padding: 16,
    textAlign: 'center',
  },

  activeItem: {
    backgroundColor: '#3e8899',
    color: palette.get('white'),
  },
  list: {
    paddingTop: 0,
    paddingBottom: 0,
  },
});
