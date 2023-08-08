import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';

const InputsBtn = ({btnName}) => {
  return (
    <Pressable style={styles.btn}>
      <Text style={styles.btnText}>{btnName}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 65,
    height: 65,
    borderRadius: 32,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default InputsBtn;
