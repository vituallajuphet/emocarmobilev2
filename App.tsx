/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Login} from './src/screens';
import {TailwindProvider} from 'tailwind-rn';
import tailwind from './tailwind.json';
import Routes from './src/routes';
import {Provider as StoreProvider} from 'react-redux';
import store from './src/store';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <StoreProvider store={store}>
      <TailwindProvider utilities={tailwind}>
        <Routes />
      </TailwindProvider>
    </StoreProvider>
  );
};

export default App;
