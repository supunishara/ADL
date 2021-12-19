import React, {useState, useRef} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import {dataArray} from '../config/data';
import Tab from './Tab';
import {relativeHeight, DEVICE_WIDTH, relativeWidth} from '../config/Metrics';
import Indicator from './Indicator';

const Tabs = ({data, scrollY, onItemPress, containerRef, measures}) => {
  return (
    <View style={styles.container}>
      <View ref={containerRef} style={styles.subContainer}>
        {data.map((item, index) => {
          return (
            <View style={{paddingHorizontal: 10}} key={index}>
              <Tab
                key={item.key}
                item={item}
                ref={item.ref}
                onItemPress={() => onItemPress(index)}
              />
            </View>
          );
        })}
      </View>
      {measures.length > 0 && (
        <Indicator measures={measures} scrollY={scrollY} />
      )}
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  container: {DEVICE_WIDTH, height: relativeHeight(40), marginTop: 20},
  subContainer: {
    justifyContent: 'space-evenly',
    flex: 1,
    flexDirection: 'row',
    paddingLeft: relativeWidth(20)
  },
});
