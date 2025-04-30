import React from 'react';
import {Text, StyleSheet, TextProps, TextStyle as RNTextStyle} from 'react-native';

interface TextStyleProps extends TextProps {
  textInput: React.ReactNode;
  color?: string;
  fontSize?: number;
  fontWeight?: RNTextStyle['fontWeight'];
}

export default function TextStyle({
  textInput,
  color = '#000000',
  fontSize = 14,
  fontWeight = 'normal',
  style,
  ...rest
}: TextStyleProps) {
  return (
    <Text
      style={[styles.text, {color, fontSize, fontWeight}, style]}
      {...rest}>
      {textInput}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
  },
});
