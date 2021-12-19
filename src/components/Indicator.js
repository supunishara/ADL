import React, {useState, useRef} from 'react';
import {View, Animated, StyleSheet} from 'react-native';
import {relativeHeight, DEVICE_WIDTH, relativeWidth} from '../config/Metrics';


const Indicator = ({data, scrollY, measures}) => {
  const inputRange = data.map((_, i) => i * height);
  const indicatorWidth = scrollY.interpolate({
    inputRange,
    outputRange: measures.map(measure => measure.width),
  });

  const translateX = scrollY.interpolate({
    inputRange,
    outputRange: measures.map(measure => measure.x),
  });

  return (
    <Animated.View
      style={{
        position: 'absolute',
        height: 14,
        width: indicatorWidth,
        backgroundColor: 'black',
        bottom: -10,
        left: 0,
        transform: [
          {
            translateX,
          },
        ],
      }}
    />
  );
};

export default Indicator;
