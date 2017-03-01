/**
 * Component Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an unconnected component',
  prompts: [{
    type: 'list',
    name: 'type',
    message: 'Select the type of component',
    default: 'Stateless Function',
    choices: () => ['Stateless Function', 'ES6 Class (Pure)', 'ES6 Class'],
  }, {
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'Button',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return componentExists(value) ? 'A component or container with this name already exists' : true;
      }

      return 'The name is required';
    },
  }, {
    type: 'confirm',
    name: 'wantMessages',
    default: true,
    message: 'Do you want i18n messages (i.e. will this component use text)?',
  }, {
    type: 'confirm',
    name: 'hasRenderer',
    default: false,
    message: 'Does this component need renderers (i.e. it does not simply compose other components)?',
  }, {
    type: 'confirm',
    name: 'wantsCSS',
    default: false,
    message: 'Does this component need styles?',
  }],
  actions: (data) => {
    // Generate index.js
    let componentTemplate;

    switch (data.type) {
      case 'ES6 Class': {
        componentTemplate = './component/es6.js.hbs';
        break;
      }
      case 'ES6 Class (Pure)': {
        componentTemplate = './component/es6.pure.js.hbs';
        break;
      }
      case 'Stateless Function': {
        componentTemplate = './component/stateless.js.hbs';
        break;
      }
      default: {
        componentTemplate = './component/es6.js.hbs';
      }
    }

    const actions = [{
      type: 'add',
      path: '../../src/components/{{properCase name}}/index.js',
      templateFile: componentTemplate,
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../src/components/{{properCase name}}/stories/default.js',
      templateFile: './component/default.stories.js.hbs',
      abortOnFail: true,
    }];

    // If they want a i18n messages file
    if (data.wantMessages) {
      actions.push({
        type: 'add',
        path: '../../src/components/{{properCase name}}/messages.js',
        templateFile: './component/messages.js.hbs',
        abortOnFail: true,
      });
    }

    // If this component uses renderers
    if (data.hasRenderer) {
      actions.push({
        type: 'add',
        path: '../../src/components/{{properCase name}}/render.js',
        templateFile: './component/render.js.hbs',
        abortOnFail: true,
      });

      actions.push({
        type: 'add',
        path: '../../src/components/{{properCase name}}/render.native.js',
        templateFile: './component/render.native.js.hbs',
        abortOnFail: true,
      });
    }

    if (data.wantsCSS) {
      actions.push({
        type: 'add',
        path: '../../src/components/{{properCase name}}/styles.js',
        templateFile: './component/styles.js.hbs',
        abortOnFail: true,
      });
    }

    return actions;
  },
};
