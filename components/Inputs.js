import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import InputsBtn from './InputsBtn';

const Inputs = () => {
  return (
    <View style={styles.block}>
      <View style={styles.btnGroup}>
        <InputsBtn btnName="C" />
        <InputsBtn btnName="7" />
        <InputsBtn btnName="4" />
        <InputsBtn btnName="1" />
        <InputsBtn btnName="+/-" />
      </View>
      <View style={styles.btnGroup}>
        <InputsBtn btnName="()" />
        <InputsBtn btnName="8" />
        <InputsBtn btnName="5" />
        <InputsBtn btnName="2" />
        <InputsBtn btnName="0" />
      </View>
      <View style={styles.btnGroup}>
        <InputsBtn btnName="%" />
        <InputsBtn btnName="9" />
        <InputsBtn btnName="6" />
        <InputsBtn btnName="3" />
        <InputsBtn btnName="." />
      </View>
      <View style={styles.btnGroup}>
        <InputsBtn btnName="/" />
        <InputsBtn btnName="X" />
        <InputsBtn btnName="-" />
        <InputsBtn btnName="+" />
        <InputsBtn btnName="=" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    height: Platform.OS === 'ios' ? 570 : 484,
    width: Platform.OS === 'ios' ? 390 : 412,
  },
  btnGroup: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default Inputs;
