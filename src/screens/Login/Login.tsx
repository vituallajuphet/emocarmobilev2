import { View, Text } from 'react-native'
import React from 'react'
import LoginProvider from './LoginProvider'
import LoginView from './LoginView'
import withCheckConnection from '../../HOC/withCheckConnection'

const Login: React.FC = () => {
  return (
    <LoginProvider>
      <LoginView />
    </LoginProvider>
  )
}

export default withCheckConnection(Login)