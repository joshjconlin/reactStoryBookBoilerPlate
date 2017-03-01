import React from 'react';

import Image from '../index';

export const name = 'Default';
export const description = 'This is the default behavior';

export default function () {
  return (
    <Image
      alt="This is an image"
      style={{ height: 320, width: 800 }}
      source={{ uri: 'https://www.takemefishing.org/tmf/assets/images/fish/american-shad-464x170.png' }}
    />
  );
}

