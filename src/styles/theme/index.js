import getMuiTheme from 'material-ui/styles/getMuiTheme';

import typography from './typography';
import spacing from './spacing';
import shadows from './shadows';
import breakpoints from './breakpoints';
import palette from './palette';
import * as components from '../components';
import makeTheme from './makeTheme';

const theme = makeTheme({
  palette,
  typography,
  spacing,
  shadows,
  components,
  breakpoints,
});

const muiTheme = getMuiTheme(theme.toJS());

export {
  palette,
  typography,
  spacing,
  shadows,
  components,
  muiTheme,
  breakpoints,
  theme as default,
};
