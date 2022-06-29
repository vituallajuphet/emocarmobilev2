import {View, Text, Image, ActivityIndicator} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {useTailwind} from 'tailwind-rn/dist';
import {Button, TextInput} from 'react-native-paper';
import {Context} from '../../context';
import { useNavigation } from '@react-navigation/native';
import {  screenState } from '../../store/reducers/screenReducer';
import { useSelector } from 'react-redux';

const Loading: React.FC = () => {
  const tw = useTailwind();

  const started = useSelector(screenState);
  const navigation = useNavigation();

  console.log(started, "stated");
  

  useEffect(() => {
    if(started){
      navigation.navigate('login')
    }
  }, [started])
  

  return (
    <View style={tw('flex-1 h-full bg-green-300')}>
      <View style={tw('justify-center items-center flex-1')}>
        <Image
          style={tw('w-[50%] h-[90px]')}
          resizeMode="contain"
          source={require('../../assets/images/comp_logo.png')}
        />
        <ActivityIndicator size={50} color="green"/>
      </View>
    </View>
  );
};

export default Loading;
