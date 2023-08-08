import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Result from '../components/Result';
import Inputs from '../components/Inputs';

const Calculator = () => {
  const [inputs, setInputs] = useState('');
  return (
    <View style={styles.block}>
      <Result inputs={inputs} />
      <Inputs setInputs={setInputs} />
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
