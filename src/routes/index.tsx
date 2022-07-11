import {View, Text} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Loading, Login, NoConnection} from '../screens';
import {useDispatch, useSelector} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import {
  checkConnection,
  connectionState,
  screenState,
  startApp,
} from '../store/reducers/screenReducer';
import LoggedDrawer from './Drawer';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const isStarted = useSelector(screenState);
  const userdata = useSelector(state => state.userstate.userdata);
  const connState = useSelector(connectionState);

  const dispatch = useDispatch();

  const hasToken = obj => obj.token_value !== undefined;

  const renderScreen = () => {
     if (hasToken(userdata)) {       
      return (
        <Stack.Screen
          options={{headerShown: false}}
          name="home"
          component={LoggedDrawer}
        />
      )
    } else if (!hasToken(userdata)) {
      return (
        <Stack.Screen
          options={{headerShown: false}}
          name="login"
          component={Login}
        />
      );
    }
  };


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
