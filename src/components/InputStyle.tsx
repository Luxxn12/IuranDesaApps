import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TextInputProps,
  Image,
  ImageSourcePropType,
} from 'react-native';

interface InputStyleProps extends TextInputProps {
  label?: string;
  borderColor?: string;
  borderRadius?: number;
  padding?: number;
  isPassword?: boolean;
  required?: boolean;
  iconSource?: ImageSourcePropType;
}

export default function InputStyle({
  label,
  borderColor = '#CCCCCC',
  borderRadius = 8,
  padding = 4,
  isPassword = false,
  required = false,
  style,
  iconSource,
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
      <View
        style={[
          styles.inputWrapper,
          {
            borderColor: '#BABBBDFF',
            borderRadius,
            padding,
          },
          style,
        ]}>
        {iconSource && (
          <Image source={iconSource} style={styles.icon} resizeMode="contain" />
        )}
        <TextInput
          style={styles.input}
          secureTextEntry={isPassword}
          onBlur={handleBlur}
          placeholderTextColor="#888"
          {...rest}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 8,
  },
  inputWrapper: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#000000',
    paddingVertical: 8,
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    marginTop: 4,
  },
});
