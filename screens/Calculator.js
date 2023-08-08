import React from 'react';
import {View, StyleSheet} from 'react-native';
import Result from '../components/Result';
import Inputs from '../components/Inputs';

const Calculator = () => {
  return (
    <View style={styles.block}>
      <Result />
      <Inputs />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});

export default Calculator;
