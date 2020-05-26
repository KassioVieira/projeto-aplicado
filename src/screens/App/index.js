import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import TabNavigation from './Tab';
import Course from './Course/Course';

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Tab" component={TabNavigation} />
      <Stack.Screen name="Course" component={Course} />
    </Stack.Navigator>
  );
}
