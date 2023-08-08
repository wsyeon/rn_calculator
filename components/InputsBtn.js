import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';

const InputsBtn = ({
  btnName,
  redBtnColor,
  greenBtnColor,
  greenBtn,
  onClickBtn,
  disableBtn,
}) => {
  return (
    <Pressable
      style={({pressed}) => [styles.btn, greenBtn && styles.greenBtn]}
      disabled={disableBtn ? true : false}
      onPress={() => onClickBtn(btnName)}
      android_ripple={{color: '#fff'}}>
      <Text
        style={[
          styles.btnText,
          redBtnColor && styles.redBtnColor,
          greenBtnColor && styles.greenBtnColor,
        ]}>
        {btnName}
      </Text>
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
  redBtnColor: {
    color: 'red',
  },
  greenBtnColor: {
    color: '#5ABD1E',
  },
  greenBtn: {
    backgroundColor: '#5ABD1E',
  },
});

export default InputsBtn;
