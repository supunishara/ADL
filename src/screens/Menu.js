import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Animated,
  View,
  Dimensions,
  Image,
  Text,
  findNodeHandle,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {dataArray} from '../config/data';
import {DEVICE_WIDTH, DEVICE_HEIGHT, relativeHeight} from '../config/Metrics';
import Tabs from '../components/Tabs';
import List from '../components/List';

const data = dataArray.map(i => ({
  key: i,
  title: i.Category,
  ref: React.createRef(),
  subCategory: i.subCategory,
}));

const Menu = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const containerRef = React.useRef();
  const ref = React.useRef();
  const [measures, setMeasures] = React.useState([]);

  const onItemPressed = React.useCallback(itemIndex => {
    ref?.current?.scrollTo({
      y: itemIndex * relativeHeight(260),
      animated: true,
    });
  });

  return (
    <View style={styles.container}>
      <Tabs
        scrollY={scrollY}
        data={data}
        onItemPress={onItemPressed}
        containerRef={containerRef}
        measures={measures}
      />

      <ScrollView
        ref={ref}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}>
        <List data={data} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default Menu;
