import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/AppNavigator';
import TextStyle from '../components/TextStyle';

type SplashScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Splash'>;
};

const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('Login');
    }, 2000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logoLogin.webp')}
        style={{
          width: 203,
          height: 200,
        }}
      />
      <View style={{
        paddingTop: 10,
        alignItems: "center",
        gap: 3
      }}>
        <TextStyle
          color="#0B6E4F"
          fontSize={30}
          textInput="Iuran Desa Apps"
          style={{
            fontWeight: 'bold',
          }}
        />
        <TextStyle
          color="#4B5563"
          fontSize={14}
          textInput="Membangun Desa Bersama"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFFFF',
  },
  text: {
    fontSize: 24,
    color: '#000000',
  },
});

export default SplashScreen;
