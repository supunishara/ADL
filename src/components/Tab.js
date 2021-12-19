import React, {useState, useRef} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

const Tab = React.forwardRef(({item, onItemPress}, ref) => {
    return (
      <TouchableOpacity onPress={onItemPress} style={styles.container}>
        <View ref={ref}>
          <Text style={{color: 'black'}}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  })

  export default Tab;

  const styles = StyleSheet.create({
    container: {
        marginRight: 20},
  });