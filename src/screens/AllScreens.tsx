import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function AllScreens() {
  return (
    <View style={styles.screen}>
      <Text>AllScreens</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {flex: 1},
});
