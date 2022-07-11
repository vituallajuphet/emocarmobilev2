import {View, Text, Image} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {useTailwind} from 'tailwind-rn/dist';
import withCheckConnection from '../../HOC/withCheckConnection';
import axios from 'axios';
import {API_GENERATE_CODE, API_POINT} from '../../config';
import {Button} from 'react-native-paper';

const Verification: React.FC = () => {
  const tw = useTailwind();

  const [code, setCode] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading) {
      axios.get(API_POINT + 'get_verification_code').then(res => {
        const data = res.data;
        if (data?.status === 'success') {
          setCode(data.data[0].code);
        }
      });
    }
  }, [loading]);

  const generateNewCode = () => {
    setLoading(true);
    setCode('');
    axios.get(API_GENERATE_CODE).then(res => {
      const data = res.data;
      setLoading(false);
    });
  };

  return (
    <View
      style={tw(
        'flex-1 h-full bg-green-300 flex-col justify-center items-center',
      )}>
      {loading ? (
        <Text style={tw('text-[20px] font-bold')}>Loading...</Text>
      ) : (
        <>
          <Text style={tw('text-[25px] font-bold text-gray-900')}>
            Verification Code
          </Text>
          <Text style={tw('text-[35px] mt-4 font-bold text-green-800')}>
            {code}
          </Text>
          <Button
            onPress={generateNewCode}
            mode="contained"
            color="green"
            style={tw('mt-4')}>
            Generate New Code
          </Button>
        </>
      )}
    </View>
  );
};

export default withCheckConnection(Verification);
