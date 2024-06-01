/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {Amplify} from 'aws-amplify';

import amplifyconfig from './src/amplifyconfiguration.json';

Amplify.configure(amplifyconfig);

import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
