import React, {useState} from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import Menu from './src/screens/Menu';

export default function App() {

  return (
    <View style={styles.container}>
      <Menu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
