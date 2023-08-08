import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

const Result = ({inputs}) => {
  return (
    <View style={styles.block}>
      <Text style={{color: '#fff', fontSize: 24}}>{inputs}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    height: Platform.OS === 'ios' ? 235 : 223,
    width: Platform.OS === 'ios' ? 390 : 412,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
});

export default Result;
