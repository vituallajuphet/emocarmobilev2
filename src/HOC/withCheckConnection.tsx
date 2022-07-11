import NetInfo from '@react-native-community/netinfo';
import {useNavigation} from '@react-navigation/native';
import React from 'react';

const withCheckConnection = (Element: React.ElementType) => props => {
  const nav = useNavigation();
  NetInfo.addEventListener(state => {
    if (!state.isConnected) {
      setTimeout(() => {
        nav.navigate('noconnection');
      }, 2000);
    } else {
      setTimeout(() => {
        if (nav.canGoBack()) {
          nav.goBack();
        }
      }, 2000);
    }
  });

  return <Element {...props} />;
};

export default withCheckConnection;
