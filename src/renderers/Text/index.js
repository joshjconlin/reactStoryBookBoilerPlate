/* eslint-disable react/no-unused-prop-types */
import React, { PropTypes } from 'react';
import { Text as BaseText } from 'react-native';
import getStyles from './styles';
import objectWithoutProps from '../../helpers/objectWithoutProps';

function Text(props, { theme }) {
  const filteredProps = objectWithoutProps(props, ['plain']);
  const styles = getStyles(props, theme);
  return (
    <BaseText
      {...filteredProps}
      style={[!props.plain && styles.root, props.style]}
    />
  );
}

Text.propTypes = {
  plain: PropTypes.bool,
  align: PropTypes.oneOf(['center', 'left', 'right', 'justify']),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
};

Text.contextTypes = {
  theme: PropTypes.object,
};

Text.defaultProps = {
  style: {},
  color: null,
  size: null,
};

export default Text;
