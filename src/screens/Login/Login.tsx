import {View, Text, Image} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {useTailwind} from 'tailwind-rn/dist';
import {Button, TextInput} from 'react-native-paper';
import {Context} from '../../context';
import { useNavigation } from '@react-navigation/native';
import { loginUser } from '../../store/reducers/userReducer';
import { useDispatch, useSelector } from 'react-redux';

const Login: React.FC = () => {
  const tw = useTailwind();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const dispatch = useDispatch()

  const user = useSelector((state) => state.userstate.userdata)
  
  const loginAccount = () => {
    dispatch(loginUser({email, password}))
  };

  return (
    <View style={tw('flex-1 h-full bg-green-300')}>
      <View style={tw('justify-center items-center')}>
        <Image
          style={tw('w-[70%]')}
          resizeMode="contain"
          source={require('../../assets/images/comp_logo.png')}
        />
      </View>
      <View style={tw('p-4')}>
        <TextInput
          label="Email"
          value={email}
          activeUnderlineColor="green"
          onChangeText={txt => {
            setEmail(txt);
          }}
        />
        <View style={tw('mt-4')}>
          <TextInput
            label="Password"
            value={password}
            onChangeText={txt => {
              setPassword(txt);
            }}
            activeUnderlineColor="green"
            secureTextEntry
          />
        </View>
        <View style={tw('mt-4')}>
          <Button
            mode="contained"
            style={tw('py-2')}
            color="green"
            onPress={() => {
              loginAccount();
            }}>
            Login
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Login;
