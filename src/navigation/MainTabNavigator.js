import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainTab from '../components/containers/MainTab';
import { HomeNobi, HomeTrade } from '../screens';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <>
    <Tab.Navigator tabBar={(props) => <MainTab {...props} />}>
        <Tab.Screen
          name="Trade"
          component={HomeTrade}
          initialParams={{ icon: 'trade' }}
          options={{
            headerShown: false
          }}
        />
        <Tab.Screen 
          name="Nobi" 
          component={HomeNobi} 
          initialParams={{ icon: 'nobi' }} 
          options={{
            headerShown: false
          }}
        />
      </Tab.Navigator>
    </>
  )
}