import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { registerScenes } from './registerScenes';
registerScenes();

const navigatorStyle = {
    navBarBackgroundColor: "white",
    navBarTextColor: '#FFF',
    navBarButtonTextColor: '#FFF',
    navBarButtonColor: '#FFF'
}

export function startApp(stage = 0) {
    if (stage === 0) {
        Navigation.startSingleScreenApp({
            screen: {
                screen: 'Rep.SearchScene',
                navigatorStyle: {
                    navBarHidden: true,
                }
            }
        });
    }
}
