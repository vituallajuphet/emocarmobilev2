import {View, Text, Image} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {useTailwind} from 'tailwind-rn/dist';
import {Button, TextInput} from 'react-native-paper';
import {Context} from './LoginProvider';
import {useNavigation} from '@react-navigation/native';
import {loginUser} from '../../store/reducers/userReducer';
import {useDispatch, useSelector} from 'react-redux';
import {SET_STATE, VALIDATE} from './context/action';
import {checkNetConnection} from '../../store/reducers/screenReducer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import axios from 'axios';
import { API_POINT } from '../../config';

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
    send({type: SET_STATE, payload: 'success'})
  }, [])
  
  const userdata = useSelector(state => state.userstate.userdata);
  const [code, setCode] = useState("code")

  const hasError = state.validation;

  useEffect(() => {    
    if(userdata?.error){
      send({
        type: VALIDATE,
        payload: {
          error: true,
          message: userdata?.error,
        },
      });
    }
  }, [userdata?.error])

  useEffect(() => {
      axios.get(API_POINT + 'get_verification_code').then(res => {
        const data = res.data;
        if (data?.status === 'success') {
          setCode(data.data[0].code);
        }
      });
  }, []);
  

  if (state.contextState === 'loading') {
    return (
      <View>
        <Text>Loading</Text>
        <Text>{state.contextState}</Text>
       
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
      <Text>{code}</Text>
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
            value={pass}
            onChangeText={txt => {
              setPassword(txt);
            }}
            activeUnderlineColor="green"
            secureTextEntry
          />
        </View>
        {hasError.error && (
          <Text style={tw('text-red-500 text-[16px] mt-2')}>
            {hasError.message}
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
