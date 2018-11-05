// @flow

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import createStore from '../store';
import Immutable from 'seamless-immutable';

let store = createStore();
class SearchStoreProvider extends PureComponent {
  getChildContext() {
    return {
      store
    };
  }

  static childContextTypes = {
    store: PropTypes.object
  };

  render() {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    );
  }
}

export default SearchStoreProvider;