import {View, Text, Image} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {useTailwind} from 'tailwind-rn/dist';
import {Button, TextInput} from 'react-native-paper';
import {Context} from '../../context';
import { useNavigation } from '@react-navigation/native';

const Login: React.FC = () => {
  const tw = useTailwind();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const context = useContext(Context);
  const navigation = useNavigation();
  const {state, dispatch} = context;


  useEffect(() => {

    console.log(state);
    
    if(state.user.isLoggedIn){
        navigation.navigate('home')
    }
  }, [state])
  

  const loginAccount = () => {
    dispatch({type:'login'})
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
