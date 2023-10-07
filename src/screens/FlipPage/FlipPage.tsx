import React, {memo, useState} from 'react';
import {Dimensions, Image, ImageRequireSource, StyleSheet} from 'react-native';

import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const {height} = Dimensions.get('screen');

interface FlipPageProps {
  front: ImageRequireSource;
  back: ImageRequireSource;
  onChange: (id: number) => void;
  bottom: boolean;
}

function FlipPage({front, back, onChange, bottom}: FlipPageProps) {
  const pageRotateX = useSharedValue(0);

  const [isDragging, setIsDragging] = useState(false);
  const coef = bottom ? -1 : 1;

  const panGesture = Gesture.Pan()
    .onStart(() => {
      runOnJS(setIsDragging)(true);
    })
    .onUpdate(e => {
      pageRotateX.value = e.translationY;
    })
    .onEnd(() => {
      if (pageRotateX.value <= -(height / 4) && pageRotateX.value < 0) {
        pageRotateX.value = withTiming(-height);
        runOnJS(onChange)(1);
      } else {
        pageRotateX.value = withTiming(0, undefined, () => {
          runOnJS(setIsDragging)(false);
        });
      }
    });

  const rBackStyle = useAnimatedStyle(() => {
    const rotateX = bottom
      ? interpolate(
          pageRotateX.value,
          [-height, 0],
          [180, 0],
          Extrapolate.CLAMP,
        )
      : interpolate(
          pageRotateX.value,
          [0, height],
          [0, -180],
          Extrapolate.CLAMP,
        );

    return {
      transform: [
        {perspective: -1000},
        {rotateY: '180deg'},
        {translateY: (coef * height) / 4},
        {
          rotateX: `${rotateX}deg`,
        },
        {translateY: (coef * -height) / 4},
        {rotateZ: '180deg'},
      ],
    };
  });

  const rFrontStyle = useAnimatedStyle(() => {
    const rotateX = bottom
      ? interpolate(
          pageRotateX.value,
          [-height, 0],
          [180, 0],
          Extrapolate.CLAMP,
        )
      : interpolate(
          pageRotateX.value,
          [0, height],
          [0, -180],
          Extrapolate.CLAMP,
        );
    return {
      transform: [
        {perspective: 1000},
        {translateY: (coef * height) / 4},
        {
          rotateX: `${rotateX}deg`,
        },
        {translateY: (coef * -height) / 4},
      ],
    };
  });
  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View style={[styles.screen, {zIndex: isDragging ? 1 : 0}]}>
        <Animated.View style={[styles.box, rBackStyle]}>
          <Image source={back} style={styles.image} />
        </Animated.View>
        <Animated.View style={[styles.box, rFrontStyle]}>
          <Image source={front} style={styles.image} />
        </Animated.View>
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  screen: {flex: 1},
  box: {
    ...StyleSheet.absoluteFillObject,
  },

  image: {
    width: undefined,
    height: undefined,
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});
export default memo(FlipPage);
