import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Home/Home';
import Course from './Course/Course';

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Course" component={Course} />
    </Stack.Navigator>
  );
}
