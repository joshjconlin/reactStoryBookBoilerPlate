import React from 'react';

import View from '../index';
import Text from '../../Text';

export const name = 'Default';
export const description = 'This is a block-level element for wrapping other elements.';

export default function () {
  return (
    <View>
      <Text>This is a basic View element</Text>
    </View>
  );
}

