import React, {useState} from 'react';
import {TextInput, StyleSheet, Text, View, TextInputProps} from 'react-native';

interface InputStyleProps extends TextInputProps {
  label?: string;
  borderColor?: string;
  borderRadius?: number;
  padding?: number;
  isPassword?: boolean;
  required?: boolean;
}

export default function InputStyle({
  label,
  borderColor = '#CCCCCC',
  borderRadius = 8,
  padding = 12,
  isPassword = false,
  required = false,
  style,
  onBlur,
  ...rest
}: InputStyleProps) {
  const [error, setError] = useState('');

  const handleBlur = (e: any) => {
    if (required && !e.nativeEvent.text) {
      setError('Field ini wajib diisi');
    } else {
      setError('');
    }

    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <View style={{marginBottom: 16}}>
      {label && (
        <Text style={styles.label}>
          {label} {required && <Text style={{color: 'red'}}>*</Text>}
        </Text>
      )}
      <TextInput
        style={[
          styles.input,
          {
            borderColor: "#BABBBDFF",
            borderRadius,
            padding,
          },
          style,
        ]}
        secureTextEntry={isPassword}
        onBlur={handleBlur}
        {...rest}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    fontSize: 14,
    color: '#000000',
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    marginTop: 4,
  },
});
