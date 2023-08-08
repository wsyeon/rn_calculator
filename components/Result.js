import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

const Result = () => {
  return (
    <View style={styles.block}>
      <Text>입력갑 && 결과값</Text>
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
