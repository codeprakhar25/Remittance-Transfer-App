/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { LogBox } from 'react-native';
import App from './App';
import {name as appName} from './app.json';


console.disableYellowBox = true; 
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();
AppRegistry.registerComponent(appName, () => App);
