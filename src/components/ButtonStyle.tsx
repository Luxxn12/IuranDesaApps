import React from 'react';
import {TouchableOpacity, Text, StyleSheet, TouchableOpacityProps} from 'react-native';

interface ButtonStyleProps extends TouchableOpacityProps {
  title: string;
  backgroundColor?: string;
  textColor?: string;
  borderRadius?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
}

export default function ButtonStyle({
  title,
  backgroundColor = '#0B6E4F',
  textColor = '#FFFFFF',
  borderRadius = 8,
  paddingVertical = 12,
  paddingHorizontal = 20,
  style,
  ...rest
}: ButtonStyleProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor,
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
