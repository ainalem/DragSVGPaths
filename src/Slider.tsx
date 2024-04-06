import React, {useRef} from 'react';
import {Animated, PanResponder, ScrollView} from 'react-native';
import {Path, Svg} from 'react-native-svg';

type Props = {
  width: number;
  d: string;
  strokeLength: number;
  scrollViewRef: React.RefObject<ScrollView>;
};

const AnimatedPath = Animated.createAnimatedComponent(Path);

const Slider = ({width, d, strokeLength, scrollViewRef}: Props) => {
  const viewRef = useRef(null);
  const pageXRef = useRef(0);
  const animationValue = useRef(new Animated.Value(0)).current;
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        if (Math.abs(gestureState.dx) > Math.abs(gestureState.dy)) {
          scrollViewRef.current?.setNativeProps({scrollEnabled: false});
        } else {
          return;
        }
        const {moveX} = gestureState;
        if (moveX < pageXRef.current) {
          animationValue.setValue(0);
        } else {
          const newValue = (moveX - pageXRef.current) / width; // Normalize value between 0 and 1
          animationValue.setValue(newValue);
        }
      },
      onPanResponderRelease: () => {
        scrollViewRef.current?.setNativeProps({scrollEnabled: true});
      },
    }),
  ).current;

  const handleMeasure = () => {
    if (viewRef.current) {
      viewRef.current.measure((_x, _y, _width, _height, pageX) => {
        pageXRef.current = pageX;
      });
    }
  };

  return (
    <>
      <Animated.View
        {...panResponder.panHandlers}
        ref={viewRef}
        onLayout={handleMeasure}>
        <Svg width={width} height={(width * 80) / 393} viewBox="0 0 393 80">
          <Path
            d={d}
            fill="none"
            stroke="#363636"
            strokeWidth="20"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="1"
            strokeDasharray="none"
          />
          <AnimatedPath
            d={d}
            fill="none"
            stroke="#f0f"
            strokeWidth="20"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="1"
            strokeDasharray={animationValue.interpolate({
              inputRange: [0, 1],
              outputRange: [
                `0 ${strokeLength}`,
                `${strokeLength} ${strokeLength}`,
              ],
            })}
          />
        </Svg>
      </Animated.View>
    </>
  );
};

export default Slider;
