import React, { PropTypes } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from '../redux/store';

const defaultStore = configureStore();

function Provider({ children, store }) {
  return (
    <ReduxProvider store={store || defaultStore}>
      {children}
    </ReduxProvider>
  );
}

Provider.propTypes = {
  store: PropTypes.object,
  children: PropTypes.node,
};

export default Provider;
