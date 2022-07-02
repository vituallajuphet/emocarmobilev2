import NetInfo from '@react-native-community/netinfo';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

const withCheckConnection = (Element: React.ElementType) => props => {

	const nav = useNavigation()
	
	NetInfo.addEventListener(state => {    
		if(!state.isConnected){
			nav.navigate('noconnection')
		}
  });
  return <Element {...props} />;
};

export default withCheckConnection
