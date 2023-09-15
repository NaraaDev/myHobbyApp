import React, {useState} from 'react';
// import MainNavigation from '@/navigations/MainNavigation';

import {StatusBar, StyleSheet, View} from 'react-native';
import FlipPage from '@/screens/FlipPage/FlipPage';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BackgroundFlip from '@/screens/FlipPage/BackgroundFlip';

const FTop = require('@/assets/img/Ftop.jpg');
const FBot = require('@/assets/img/Fbot.jpg');
const STop = require('@/assets/img/Stop.jpg');
const SBot = require('@/assets/img/Sbot.jpg');

export default function App() {
  const [index, setIndex] = useState(0);

  const images = [
    {top: FTop, bottom: FBot},
    {top: STop, bottom: SBot},
    {top: FTop, bottom: FBot},
  ];

  const prev = images[index - 1];
  const current = images[index];
  const next = images[index + 1];

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>
        <StatusBar hidden />
        {/* <MainNavigation /> */}
        <BackgroundFlip
          top={!prev ? current.top : prev.top}
          bottom={!next ? current.bottom : next.bottom}
        />
        {!prev ? (
          <View style={styles.container} />
        ) : (
          <FlipPage
            onChange={async (id: number) => await setIndex(index + id)}
            key={`${index}-top`}
            front={current.top}
            back={prev.bottom}
            bottom={false}
          />
        )}
        {!next ? (
          <View style={styles.container} />
        ) : (
          <FlipPage
            onChange={async (id: number) => await setIndex(index + id)}
            key={`${index}-bottom`}
            front={current.bottom}
            back={next.top}
            bottom
          />
        )}
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
