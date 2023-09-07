import React from 'react';
import {StyleSheet, Text} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

export default function FlipPage() {
  return (
    <SafeAreaView style={styles.screen}>
      <Text>FlipPage</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {flex: 1},
});
