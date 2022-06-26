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
import {Login} from './src/screens'
import {TailwindProvider} from 'tailwind-rn';
import tailwind from './tailwind.json'
import Routes from './src/routes';
import { Provider } from './src/context';

const App = () => {
  return (
      <TailwindProvider utilities={tailwind}>
          <Provider>
            <Routes />
          </Provider>
      </TailwindProvider>
  )
};

export default App;
