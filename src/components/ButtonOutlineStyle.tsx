import React from 'react';
import {TouchableOpacity, Text, StyleSheet, TouchableOpacityProps} from 'react-native';

interface ButtonOutlineStyleProps extends TouchableOpacityProps {
  title: string;
  borderColor?: string;
  textColor?: string;
  borderRadius?: number;
  borderWidth?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
}

export default function ButtonOutlineStyle({
  title,
  borderColor = '#0B6E4F',
  textColor = '#0B6E4F',
  borderRadius = 8,
  borderWidth = 1,
  paddingVertical = 10,
  paddingHorizontal = 20,
  style,
  ...rest
}: ButtonOutlineStyleProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          borderColor,
          borderWidth,
          borderRadius,
          paddingVertical,
          paddingHorizontal,
        },
        style,
      ]}
      activeOpacity={0.8}
      {...rest}>
      <Text style={[styles.text, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
