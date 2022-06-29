import {View, Text, Image} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {useTailwind} from 'tailwind-rn/dist';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Home: React.FC = () => {

  const tw = useTailwind()
  const navigation = useNavigation();

  return (
    <View style={tw('flex-1 h-full bg-green-300')}>
       <Text>Home</Text>
       <Button onPress={()=> {
       }}>Logout</Button>
    </View>
  );
};

export default Home;
