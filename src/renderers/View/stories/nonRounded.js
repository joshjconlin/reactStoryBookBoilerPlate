import React from 'react';

import View from '../index';
import Text from '../../Text';

export const name = 'Non-rounded';
export const description = 'This View element has square corners.';

export default function () {
  return (
    <View rounded={false}>
      <Text>This is a non-rounded View element.</Text>
    </View>
  );
}

