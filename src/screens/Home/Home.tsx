import {View, Text, Image} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {useTailwind} from 'tailwind-rn/dist';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../store/reducers/userReducer';

const Home: React.FC = () => {

  const tw = useTailwind()
  const navigation = useNavigation();
  const dispatch = useDispatch()

  return (
    <View style={tw('flex-1 h-full bg-green-300')}>
       <Text>Home</Text>
       <Button onPress={()=> {
         dispatch(logoutUser);
       }}>Logout</Button>
    </View>
  );
};

export default Home;
