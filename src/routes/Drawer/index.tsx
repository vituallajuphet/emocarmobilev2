import {View, Text, Touchable} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Home, Profile, Verification} from '../../screens';
import {useTailwind} from 'tailwind-rn/dist';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

const LoggedDrawer = () => {
  const Drawer = createDrawerNavigator();

  const tw = useTailwind();

  const renderHeader = params => {

   
    
    const {route} = params;

    return (
      <View style={tw('p-4')}>
        <View style={tw('flex-row justify-between items-center')}>
          <View style={tw('flex-row items-center')}>
             <TouchableOpacity style={tw('mr-4')} onPress={() => {
                 params.navigation.openDrawer();
             }}>
                 <Icon name='menu' size={25} color='black'/>
             </TouchableOpacity>
            <Text style={tw('text-black text-[20px]')}>{route.name}</Text>
          </View>
          <View>
            <TouchableOpacity>
                <Icon name="account" color="black" size={30} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <Drawer.Navigator
      initialRouteName="Verification"
      screenOptions={{
        header: renderHeader,
      }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen
        options={{
          headerTitle: 'Verification Code',
        }}
        name="Verification"
        component={Verification}
      />
    </Drawer.Navigator>
  );
};

export default LoggedDrawer;
