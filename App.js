/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React from 'react';
 import { Provider } from 'react-redux'
 import store from './src/store';
 import Routes from './src/routes';

 export default () => (
   <Provider store={store}>
     <Routes />
   </Provider>
 )
