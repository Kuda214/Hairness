import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const StyledButton = (props) => {

  const { type, content, onPress } = props;

  const backgroundColor = type === 'primary' ? '#f00' : '#121111';
 

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, {backgroundColor: backgroundColor}]}
        onPress={() => onPress()}
      >
        <Text style={styles.text}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
