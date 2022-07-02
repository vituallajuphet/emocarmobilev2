import {View, Text} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Loading, Login} from '../screens';
import {useDispatch, useSelector} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import {
  checkConnection,
  connectionState,
  screenState,
  startApp,
} from '../store/reducers/screenReducer';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const isStarted = useSelector(screenState);
  const islogged = useSelector(state => state.userstate.userdata);
  const connState = useSelector(connectionState);

  const dispatch = useDispatch();

  const isEmpty = obj => Object.keys(obj).length === 0;


  // useEffect(() => {
  //   if (!isStarted) {
  //     setTimeout(() => {
  //       dispatch(startApp(true));
  //     }, 3000);
  //   }
  // }, [isStarted]);
  

  const renderScreen = () => {
     if (!isEmpty(islogged)) {
      return (
        <Stack.Screen
          options={{headerShown: false}}
          name="home"
          component={Home}
        />
      )
    } else if (isEmpty(islogged)) {
      return (
        <Stack.Screen
          options={{headerShown: false}}
          name="login"
          component={Login}
        />
      );
    }
  };

  const NoConnection = () => {
    return <Text>no connection</Text>
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
          {renderScreen()}
          <Stack.Screen
              options={{headerShown: false}}
              name="noconnection"
              component={NoConnection}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
