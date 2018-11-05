import { Navigation } from 'react-native-navigation';
import injectWrappers from './injectWrappers';

import {
    SearchScene
} from 'RepScenes';

export function registerScenes() {
    Navigation.registerComponent('Rep.SearchScene', injectWrappers(SearchScene));
}
