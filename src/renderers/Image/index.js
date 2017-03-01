/* eslint-disable react/no-unused-prop-types */

import React, { PropTypes } from 'react';
import { Image as BaseImage } from 'react-native';
import getStyles from './styles';

function Image(props, { theme }) {
  const styles = getStyles(props, theme);
  return (
    <BaseImage {...props} style={[styles.root, props.style]} />
  );
}

Image.propTypes = {
  ...BaseImage.propTypes,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
  source: PropTypes.any,
  alt: PropTypes.string,
  title: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

Image.contextTypes = {
  theme: PropTypes.object,
};

export default Image;
