import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home/Home';
import MyCourse from './MyCourse/MyCourse';
import Profile from './Profile/Profile';

import TabMenu from '../../components/TabMenu';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator tabBar={(props) => <TabMenu {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="MyRoadmap" component={MyCourse} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default TabNavigation;
