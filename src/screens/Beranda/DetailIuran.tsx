import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import TextStyle from '../../components/TextStyle';
import SafeAreaContainer from '../../components/SafeAreaContainer';
import {useRoute} from '@react-navigation/native';
import {IuranPrograms} from '../../types/beranda';
import ButtonStyle from '../../components/ButtonStyle';

export default function DetailIuran() {
  const route = useRoute();
  const {data}: any = route.params || {};

  console.log(data);
  return (
    <SafeAreaContainer backgroundColor="#FFFFFF" barStyle="dark-content">
      <Image source={{uri: data.image_url}} style={styles.image} />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled">
        <View style={styles.viewDetail}>
          <TextStyle fontSize={24} fontWeight={'bold'} textInput={data.title} />
          <TextStyle textInput={data.location} />
          <View style={{paddingTop: 20}}>
            <TextStyle
              fontSize={18}
              textInput={'Deskripsi'}
              fontWeight={'bold'}
            />
            <TextStyle
              style={{textAlign: 'justify'}}
              fontSize={16}
              textInput={data.deskripsi}
            />
          </View>
          <View style={{paddingTop: 20, gap: 20}}>
            <View style={styles.total}>
              <TextStyle fontSize={16} textInput={'Dana Dibutuhkan'} />
              <TextStyle
                fontSize={16}
                fontWeight={'bold'}
                textInput={'Rp.' + data.total_amount.toLocaleString()}
              />
            </View>
            <View style={styles.total}>
              <TextStyle fontSize={16} textInput={'Terkumpul'} />
              <TextStyle
                fontSize={16}
                fontWeight={'bold'}
                textInput={'Rp.' + data.amount_collected.toLocaleString()}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.button}>
        <ButtonStyle title="Iuran Sekarang" />
      </View>
    </SafeAreaContainer>
  );
}
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  image: {
    width: '100%',
    height: 250,
  },
  viewDetail: {
    paddingHorizontal: 16,
    paddingTop: 15,
    gap: 10,
  },
  total: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
});
