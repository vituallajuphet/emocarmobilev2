import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Login} from '../screens';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='login'>
         <Stack.Screen options={{headerShown:false}} name="home" component={Home} />
         <Stack.Screen options={{headerShown:false}} name="login" component={Login} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
