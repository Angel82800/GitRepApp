import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { SearchContainer } from 'RepContainers';

export class SearchScene extends PureComponent {
    static propTypes = {
        routeScene: PropTypes.func.isRequired,
        popToRoot: PropTypes.func.isRequired,
        routeBack: PropTypes.func.isRequired
    };

    render() {
        const { routeBack, routeScene, popToRoot, navigator } = this.props;
        
        return (
            <SearchContainer
                routeScene={routeScene}
                popToRoot={popToRoot}
                routeBack={routeBack}
                navigator={navigator}
            />
        );
    }
}
