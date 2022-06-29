import {View, Text} from 'react-native';
import React, { useEffect, useRef } from 'react';
import {NavigationContainer, useNavigationContainerRef} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Loading, Login} from '../screens';
import { useDispatch, useSelector } from 'react-redux';
import { screenState, startApp } from '../store/reducers/screenReducer';

const Stack = createNativeStackNavigator();

const Routes = () => {

  const isStarted = useSelector(screenState);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!isStarted){ 
      setTimeout(() => {
        dispatch(startApp(true));
      }, 3000);
    }
  }, [isStarted])
  
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef();

  return (
    <NavigationContainer 
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.getCurrentRoute().name;

        if (previousRouteName !== currentRouteName) {
          // The line below uses the expo-firebase-analytics tracker
          // https://docs.expo.io/versions/latest/sdk/firebase-analytics/
          // Change this line to use another Mobile analytics SDK
          // await Analytics.setCurrentScreen(currentRouteName);
        }
        
        // Save the current route name for later comparison
        routeNameRef.current = currentRouteName;
      }}
    >
        <Stack.Navigator initialRouteName='loading'>
         <Stack.Screen options={{headerShown:false}} name="home" component={Home} />
         <Stack.Screen options={{headerShown:false}} name="login" component={Login} />
         <Stack.Screen options={{headerShown:false}} name="loading" component={Loading} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
