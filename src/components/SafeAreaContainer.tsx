import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StatusBarStyle,
  StyleSheet,
  ViewStyle,
} from 'react-native';

interface SafeAreaContainerProps {
  children: React.ReactNode;
  backgroundColor?: string;
  barStyle?: StatusBarStyle;
  style?: ViewStyle;
}

export default function SafeAreaContainer({
  children,
  backgroundColor = '#ffffff',
  barStyle = 'dark-content',
  style,
}: SafeAreaContainerProps) {
  return (
    <SafeAreaView style={[styles.container, {backgroundColor}, style]}>
      <StatusBar backgroundColor={backgroundColor} barStyle={barStyle}  />
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
