import React from 'react';

import { provider as Provider } from 'SocialRedux';
import mapNavigatorToProps from './mapNavigationToProps';

export default function (Component) {
  
  return function navigationConnector() {
    return function inject(props) {
      return (
        <Provider>
            <Component
              {...props}
              {...mapNavigatorToProps(props.navigator)}
            />
        </Provider>
      );
    };
  };
}
