import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Introducion from './Introducion';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Introducion" component={Introducion} />
    </Stack.Navigator>
  );
}
