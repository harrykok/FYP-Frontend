/**
 * @format
 */
//import 'react-native-gesture-handler';
//import * as React from 'react';
import {AppRegistry} from 'react-native';
import App from './StylistProfile';
import {name as appName} from './HairFlick/app.json';
//import { NavigationContainer } from '@react-navigation/native';

//<NavigationContainer>{
AppRegistry.registerComponent(appName, () => App)
//}</NavigationContainer>