import React from 'react';
import { configure, setAddon, addDecorator, storiesOf } from '@kadira/storybook';

import infoAddon from '@kadira/react-storybook-addon-info';
import ThemeProvider from '../src/helpers/ThemeProvider';
import RouterProvider from '../src/helpers/RouterProvider';
import StoreProvider from '../src/helpers/StoreProvider';
import StoryBookLayout from '../src/helpers/StoryBookLayout';

setAddon(infoAddon);

addDecorator((story) => (<StoreProvider>{story()}</StoreProvider> ));
addDecorator((story) => (<RouterProvider>{story()}</RouterProvider> ));
addDecorator((story) => (<ThemeProvider>{story()}</ThemeProvider>));

const req = require.context('../src', true, /.stories\/(.+)\.js$/);

function loadStories() {
  req.keys().forEach((path) => {
    const match = path.match(/\.\/(containers|components|renderers)\/([^.][^\/]+)/);
    const type = match[1];
    const componentName = match[2];
    const stories = storiesOf(`[${type}] ${componentName}`, module);
    const storyData = req(path);

    stories.addDecorator((story) => (<StoryBookLayout componentName={componentName}>{story()}</StoryBookLayout>));
    stories.addWithInfo(storyData.name, storyData.description, storyData.default);
  });
}

configure(loadStories, module);
