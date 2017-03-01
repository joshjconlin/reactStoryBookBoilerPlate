import React from 'react';

import View from '../index';

export const name = 'Shadow';
export const description = 'This is a View component with a modified drop shadow';
export default function () {
  return (
    <View zDepth={3}>This is a View component with a modified drop shadow</View>
  );
}

