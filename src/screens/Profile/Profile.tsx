import {View, Text, Image} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {useTailwind} from 'tailwind-rn/dist';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {logoutUser} from '../../store/reducers/userReducer';
import withCheckConnection from '../../HOC/withCheckConnection';

const Profile: React.FC = () => {
  const tw = useTailwind();

  return (
    <View
      style={tw(
        'flex-1 h-full bg-green-300 flex-col justify-center items-center',
      )}>
        <Text>Profile</Text>
    </View>
  );
};

export default withCheckConnection(Profile);
