import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Introducion from './Introducion';
import SignUp from './SignUp';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Introducion" component={Introducion} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
