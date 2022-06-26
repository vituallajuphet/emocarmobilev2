import {View, Text, Image} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {useTailwind} from 'tailwind-rn/dist';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Context } from '../../context';

const Home: React.FC = () => {

  const tw = useTailwind()
  const context = useContext(Context);
  const navigation = useNavigation();
  const {state, dispatch} = context;


  useEffect(() => {
    if(!state.isLoggedIn){
        navigation.navigate('login')
    }
  }, [state])
  

  return (
    <View style={tw('flex-1 h-full bg-green-300')}>
       <Text>Home</Text>
       <Button onPress={()=> {
        dispatch({type:'logout'})
       }}>Logout</Button>
    </View>
  );
};

export default Home;
