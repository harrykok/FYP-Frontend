/**
 * @format
 */
import 'react-native-gesture-handler';
import * as React from 'react';
import {AppRegistry} from 'react-native';
import App from './StylistProfile';
import {name as appName} from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import {LogBox } from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);

<NavigationContainer>{
AppRegistry.registerComponent(appName, () => App)
}</NavigationContainer>