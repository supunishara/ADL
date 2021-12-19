import React, {useState, useRef} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Text
} from 'react-native';
import {relativeHeight, DEVICE_WIDTH, DEVICE_HEIGHT} from '../config/Metrics';


const List = ({data}) => {
    return (
        <View style={{DEVICE_WIDTH}}>
          <View  style={{flex: 1}} >
            {data.map((item, index) => {
              return (
                <View style={styles.categoryItem} key={index}>
                  <Text style={styles.titleTextStyle}>{item.title}</Text>
                  {item.subCategory.map((sub, i) => {
                    return (
                      <View style={styles.subCategoryItem} key={i} ref={item.ref}>
                        <Text style={styles.subCategoryTextStyle}>{sub.title}</Text>
                        <Text>{sub.price}</Text>
                      </View>
                    );
                  })}
                </View>
              );
            })}
          </View>
        </View>
      );
}

export default List;

const styles = StyleSheet.create({
    categoryItem: {
        width: DEVICE_WIDTH,
        paddingLeft: 20,
        marginVertical: 20,
        height: relativeHeight(260),
        justifyContent:'center',
      },
      titleTextStyle: {
        fontWeight: '700',
        fontSize: 30,
        color: 'black'
      },
      subCategoryItem: {
        paddingVertical: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 0.6,
      },
      subCategoryTextStyle: {
        fontWeight: '600',
        fontSize: 13,
        color: 'black'
      },
  });