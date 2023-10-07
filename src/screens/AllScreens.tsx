import {MainNavParamList} from '@/navigations/types/MainNavParamList';
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function AllScreens({
  navigation,
}: StackScreenProps<MainNavParamList, 'AllScreens'>) {
  return (
    <View style={styles.screen}>
      <TouchableOpacity
        onPress={() => navigation.navigate('NetflixCategory')}
        style={styles.navigateButton}>
        <Text>Netflix Category</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  navigateButton: {
    width: 200,
    height: 50,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
