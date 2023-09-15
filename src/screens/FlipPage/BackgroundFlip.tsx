import React from 'react';
import {Image, ImageRequireSource, StyleSheet, View} from 'react-native';

interface BackgroundFlipProps {
  top: ImageRequireSource;
  bottom: ImageRequireSource;
}

export default function BackgroundFlip({top, bottom}: BackgroundFlipProps) {
  return (
    <View style={StyleSheet.absoluteFillObject}>
      <View style={styles.container}>
        <Image source={top} style={styles.img} />
      </View>
      <View style={styles.container}>
        <Image source={bottom} style={styles.img} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
  },
});
