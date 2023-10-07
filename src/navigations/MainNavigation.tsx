import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import AllScreens from '@/screens/AllScreens';
import NetflixCategory from '@/screens/netflix/NetflixCategory';

import {MainNavParamList} from './types/MainNavParamList';

const Stack = createStackNavigator<MainNavParamList>();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="AllScreens">
        <Stack.Screen name="AllScreens" component={AllScreens} />
        {/* <Stack.Screen name="FlipPage" component={FlipPage} /> */}
        <Stack.Screen name="NetflixCategory" component={NetflixCategory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
