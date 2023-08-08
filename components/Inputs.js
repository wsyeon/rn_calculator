import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import InputsBtn from './InputsBtn';

const Inputs = ({setInputs}) => {
  const onClickBtn = name => {
    if (name === 'C') {
      setInputs('');
      return false;
    }
    if (name === '=') {
      setInputs(pre => eval(pre));
      return false;
    }
    if (name === 'X') {
      setInputs(pre => pre + '*');
    } else {
      setInputs(pre => pre + name);
    }
  };
  return (
    <View style={styles.block}>
      <View style={styles.btnGroup}>
        <InputsBtn onClickBtn={onClickBtn} redBtnColor btnName="C" />
        <InputsBtn onClickBtn={onClickBtn} btnName="7" />
        <InputsBtn onClickBtn={onClickBtn} btnName="4" />
        <InputsBtn onClickBtn={onClickBtn} btnName="1" />
        <InputsBtn onClickBtn={onClickBtn} disableBtn btnName="+/-" />
      </View>
      <View style={styles.btnGroup}>
        <InputsBtn greenBtnColor disableBtn btnName="()" />
        <InputsBtn onClickBtn={onClickBtn} btnName="8" />
        <InputsBtn onClickBtn={onClickBtn} btnName="5" />
        <InputsBtn onClickBtn={onClickBtn} btnName="2" />
        <InputsBtn onClickBtn={onClickBtn} btnName="0" />
      </View>
      <View style={styles.btnGroup}>
        <InputsBtn greenBtnColor disableBtn btnName="÷" />
        <InputsBtn onClickBtn={onClickBtn} btnName="9" />
        <InputsBtn onClickBtn={onClickBtn} btnName="6" />
        <InputsBtn onClickBtn={onClickBtn} btnName="3" />
        <InputsBtn onClickBtn={onClickBtn} btnName="." />
      </View>
      <View style={styles.btnGroup}>
        <InputsBtn onClickBtn={onClickBtn} greenBtnColor btnName="/" />
        <InputsBtn onClickBtn={onClickBtn} greenBtnColor btnName="X" />
        <InputsBtn onClickBtn={onClickBtn} greenBtnColor btnName="-" />
        <InputsBtn onClickBtn={onClickBtn} greenBtnColor btnName="+" />
        <InputsBtn greenBtn onClickBtn={onClickBtn} btnName="=" />
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
