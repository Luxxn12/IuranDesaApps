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

type LoginScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>;
};

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    if (username === 'lukman' && password === 'lukman') {
      navigation.replace('Main');
    } else {
      Alert.alert('Invalid Credentials');
    }
  };

  const handleRDaftar = () => {
    navigation.navigate('Daftar');
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
            textInput="Masuk untuk berkontribusi dalam program desa"
          />
        </View>
        <InputStyle
          value={username}
          placeholder="Masukkan Username"
          label="Username"
          onChangeText={setUsername}
          required
        />
        <InputStyle
          isPassword={true}
          value={password}
          placeholder="Masukkan Password"
          label="Password"
          onChangeText={setPassword}
          required
        />
        <View style={styles.buttonTop}>
          <ButtonStyle title="Login" onPress={handleLogin} />
          <ButtonOutlineStyle title="Daftar" onPress={handleRDaftar} />
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

export default LoginScreen;
