import React from 'react';
import {StyleSheet} from 'react-native';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MainNavigation from '@/navigations/MainNavigation';

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <MainNavigation />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
