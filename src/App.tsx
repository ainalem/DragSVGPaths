import React, {useRef} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Slider from './Slider';

const WIDTH = Dimensions.get('window').width;

function App(): React.JSX.Element {
  const scrollViewRef = useRef(null);

  const backgroundStyle = {
    backgroundColor: 'black',
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView ref={scrollViewRef}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <Text style={styles.title}>
          React Native{' '}
          <Text style={[styles.title, styles.titleLight]}>
            - Draggable SVG Paths
          </Text>
        </Text>
        <Text style={styles.themeTitle}>Zigzag</Text>
        <View style={styles.sliderContainer}>
          <Slider
            width={WIDTH - 40}
            d="m16.5 40 15-15 30 30 30-30 30 30 30-30 30 30 30-30 30 30 30-30 30 30 30-30 30 30 15-15"
            strokeLength={510}
            scrollViewRef={scrollViewRef}
          />
        </View>
        <Text style={styles.themeTitle}>Roller coaster</Text>
        <View style={styles.sliderContainer}>
          <Slider
            width={WIDTH - 40}
            d="M16.5 40s4.393-15 15-15 15.858 30 30 30 15.858-30 30-30 15.858 30 30 30 15.858-30 30-30 15.858 30 30 30 15.858-30 30-30 15.858 30 30 30 15.858-30 30-30 15.858 30 30 30 15.858-30 30-30 19.393 30 30 30 15-15 15-15"
            strokeLength={540}
            scrollViewRef={scrollViewRef}
          />
        </View>
        <Text style={styles.themeTitle}>Elephant's trunk</Text>
        <View style={styles.sliderContainer}>
          <Slider
            width={WIDTH - 40}
            d="M16.5 40s-3.419-15 15-15 .234 30 30 30 .234-30 30-30 .234 30 30 30 .234-30 30-30 .234 30 30 30 .234-30 30-30 .234 30 30 30 .234-30 30-30 .234 30 30 30 .234-30 30-30 11.581 30 30 30 15-15 15-15"
            strokeLength={600}
            scrollViewRef={scrollViewRef}
          />
        </View>
        <Text style={styles.themeTitle}>Cape of good hope</Text>
        <View style={styles.sliderContainer}>
          <Slider
            width={WIDTH - 40}
            d="m16.5 40 15-15s15.858 30 30 30 30-30 30-30 15.858 30 30 30 30-30 30-30 15.858 30 30 30 30-30 30-30 15.858 30 30 30 30-30 30-30 15.858 30 30 30 30-30 30-30 19.393 30 30 30 15-15 15-15"
            strokeLength={540}
            scrollViewRef={scrollViewRef}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: '800',
    paddingHorizontal: 20,
    paddingVertical: 60,
  },
  titleLight: {
    fontWeight: '500',
  },
  sliderContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  themeTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 20,
    marginTop: 20,
  },
});

export default App;
