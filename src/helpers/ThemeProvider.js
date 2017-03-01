import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import theme from '../styles/theme';

class ThemeProvider extends Component {

  static propTypes = {
    children: PropTypes.any,
  };

  static childContextTypes = {
    theme: PropTypes.object,
  };

  getChildContext() {
    return {
      theme,
    };
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(theme.toJS())}>
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}

export default ThemeProvider;
