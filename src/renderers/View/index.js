/* eslint-disable react/no-unused-prop-types */
import React, { PropTypes } from 'react';
import { View as BaseView } from 'react-native';
import getStyles from './styles';
import objectWithoutProps from '../../helpers/objectWithoutProps';

class View extends BaseView {
  render() {
    const styles = getStyles(this.props, this.context.theme);
    const rootProps = objectWithoutProps(this.props, ['rounded', 'zDepth', 'plain', 'canvas']);
    return (
      <BaseView {...rootProps} style={[!this.props.plain && styles.root, this.props.style]} />
    );
  }
}

View.propTypes = {
  ...BaseView.propTypes,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
  children: PropTypes.node,
  circle: PropTypes.bool,
  plain: PropTypes.bool,
  rounded: PropTypes.oneOf([true, false, 'large', 'medium', 'small']),
  zDepth: PropTypes.number,
  canvas: PropTypes.bool,
};

View.contextTypes = {
  theme: PropTypes.object,
  muiTheme: PropTypes.object,
};

View.defaultProps = {
  zDepth: 0,
  rounded: false,
  canvas: false,
};

export default View;
