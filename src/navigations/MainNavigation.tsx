import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {MainNavParamList} from './types/MainNavParamList';
import FlipPage from '@/screens/FlipPage/FlipPage';

const Stack = createNativeStackNavigator<MainNavParamList>();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="FlipPage" component={FlipPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
