import React, { Component, PropTypes } from 'react';

import { Router, Route, browserHistory } from 'react-router';

export default class RouterProvider extends Component {

  static propTypes = {
    children: PropTypes.any,
    router: PropTypes.object,
  };

  static childContextTypes = {
    router: PropTypes.object,
  };

  getChildContext() {
    return {
      router: this.props.router,
    };
  }

  render() {
    return (
      <Router
        key={Math.random()}
        history={browserHistory}
      >
        <Route path="*" component={() => <div>{this.props.children}</div>} />
      </Router>
    );
  }
}
