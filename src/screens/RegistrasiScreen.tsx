import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Image,
  ScrollView,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/AppNavigator';
import TextStyle from '../components/TextStyle';
import InputStyle from '../components/InputStyle';
import ButtonStyle from '../components/ButtonStyle';
import ButtonOutlineStyle from '../components/ButtonOutlineStyle';

type DaftarScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Daftar'>;
};

const RegistrasiScreen: React.FC<DaftarScreenProps> = ({navigation}) => {
  const handleLogin = () => {
    navigation.replace('Login');
  };
  const handleDaftar = () => {
    navigation.replace('Login');
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            source={require('../assets/logoLogin.webp')}
            style={{
              width: 156,
              height: 153,
            }}
          />
          <View
            style={{
              paddingTop: 10,
              paddingBottom: 2,
            }}>
            <TextStyle
              color="#0B6E4F"
              fontSize={30}
              textInput="Iuran Desa Apps"
              style={{
                fontWeight: 'bold',
              }}
            />
          </View>
          <TextStyle
            color="#4B5563"
            fontSize={14}
            textInput="Daftar untuk berkontribusi dalam program desa"
          />
        </View>
        <InputStyle placeholder="Masukkan Username" label="Username" required />
        <InputStyle placeholder="Masukkan Phone" label="Phone" required />
        <InputStyle placeholder="Masukkan Password" label="Password" required />
        <InputStyle
          placeholder="Masukkan Konfirmasi Password"
          label="Konfirmasi Password"
          required
        />
        <View style={styles.buttonTop}>
          <ButtonStyle title="Daftar" onPress={handleDaftar} />
          <ButtonOutlineStyle title="Login" onPress={handleLogin} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    alignContent: 'center',
    alignItems: 'center',
    paddingBottom: 40,
  },
  buttonTop: {
    paddingTop: 20,
    gap: 10,
  },
});

export default RegistrasiScreen;
