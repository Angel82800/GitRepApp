import { Platform } from 'react-native';
import { debounce } from 'lodash';

const ACTION_DELAY = 200;
const IGNORE_DEBOUNCE_LIST = [
    'setBadge',
    'popToRoot',
    'resetTo',
    'screenWillAppear',
    'screenDidAppear',
    'screenWillDisappear',
    'screenDidDisappear'
];

function getSceneNavigatorStyle(scene) {
    const navigatorParams = {};
    switch (scene) {
      default:
        navigatorParams.statusBarTextColorScheme = 'dark';
        navigatorParams.statusBarColor = "white";
        break;
    }
    return navigatorParams;
}

function debounceMethods(passActions, ignoreList, DELAY) {
    const actions = { ...passActions };
    Object.keys(actions)
      .forEach((fnName) => {
        if (ignoreList.includes(fnName)) {
          return;
        }
        actions[fnName] = debounce(actions[fnName], DELAY);
      });
    return actions;
}

export default function (navigation) {
    const passActions = {
        onBack: (animated) => {
          navigation.pop({
            animated: !!animated
          });
        },
        routeBack: () => {
          navigation.pop();
        },
        replaceCurrentSceneProps: () => {},
        routeScene: (scene, passProps, params = {}) => {
          navigation.push({
            screen: `Rep.${scene}`,
            navigatorStyle: {
              navBarHidden: true,
              screenBackgroundColor: 'white',
              navBarTitleTextCentered: true, // Android only
              disabledBackGesture: false,
              orientation: 'portrait',
              enabledBackGestureFullScreen: true,
              // ...getSceneNavigatorStyle(scene),
              ...params.navigatorStyle
            },
            navigatorButtons: {
              ...params.navigatorButtons,
            },
            backButtonHidden: params.backButtonHidden,
            backButtonTitle: params.backButtonTitle,
            title: params.title,
            titleImage: params.titleImage,
            animated: params.animated,
            overrideBackPress: params.overrideBackPress,
            passProps
          });
        },
        resetTo: (scene, passProps, params = {}) => {
          navigation.resetTo({
            screen: `Rep.${scene}`,
            title: params.title,
            animated: params.animated,
            navigatorStyle: {
              navBarHidden: true,
              ...params.navigatorStyle,
            },
            navigatorButtons: {
              ...Platform.select({
                android: {
                  leftButtons: [{
                    //icon: BACK_ICON,
                    id: 'back'
                  }],
                  animated: true,
                }
              }),
              ...params.navigatorButtons,
            },
            overrideBackPress: params.overrideBackPress,
            passProps: {
              ...passProps,
            }
          });
        },
        popToRoot: (params) => {
          navigation.popToRoot(params);
        },
    };

    return debounceMethods(passActions, IGNORE_DEBOUNCE_LIST, ACTION_DELAY);
}
