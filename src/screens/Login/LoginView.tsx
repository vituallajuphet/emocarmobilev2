import {View, Text, Image} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {useTailwind} from 'tailwind-rn/dist';
import {Button, TextInput} from 'react-native-paper';
import {Context} from './LoginProvider';
import {useNavigation} from '@react-navigation/native';
import {loginUser} from '../../store/reducers/userReducer';
import {useDispatch, useSelector} from 'react-redux';
import {SET_STATE} from './context/action';
import { checkNetConnection } from '../../store/reducers/screenReducer';


const LoginView: React.FC = () => {
  const tw = useTailwind();
  const [email, setEmail] = useState('');
  const [pass, setPassword] = useState('');

  const dispatch = useDispatch();

  const context = useContext(Context);

  const {state = {}, send = {}} = context;

  const loginAccount = () => {
    dispatch(loginUser({email, password: pass}));
  };

  useEffect(() => {    
    dispatch(checkNetConnection());
    setTimeout(() => {
      send({type:SET_STATE, payload: 'success'})
    }, 3000);
  }, [])

  const {username, password} = state.validation.fields;

  if (state.contextState === 'loading') {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <View style={tw('flex-1 h-full bg-green-300 flex-col justify-center')}>
      <View style={tw('justify-center items-center ')}>
        <Image
          style={tw('w-[70%] h-[100px] -mt-[50px]')}
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
        {username.error && (
          <Text style={tw('text-red-500 text-[15px] mt-1')}>
            {username.message}
          </Text>
        )}
        <View style={tw('mt-4')}>
          <TextInput
            label="Password"
            value={pass}
            onChangeText={txt => {
              setPassword(txt);
            }}
            activeUnderlineColor="green"
            secureTextEntry
          />
        </View>
        {password.error && (
          <Text style={tw('text-red-500 text-[15px] mt-1')}>
            {password.message}
          </Text>
        )}
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

export default LoginView;
