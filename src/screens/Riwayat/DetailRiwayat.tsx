import React from 'react';
import TextStyle from '../../components/TextStyle';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import SafeAreaContainer from '../../components/SafeAreaContainer';
import {useRoute} from '@react-navigation/native';
import ButtonStyle from '../../components/ButtonStyle';
import ButtonOutlineStyle from '../../components/ButtonOutlineStyle';

const iconSuccess: any = require('../../assets/statusDone.webp');
const iconPending: any = require('../../assets/statusPending.webp');
const iconGagal: any = require('../../assets/statusCancel.webp');

export default function DetailRiwayat({navigation}: any) {
  const route = useRoute();
  const {data}: any = route.params || {};
  return (
    <SafeAreaContainer backgroundColor="#FFFFFF" barStyle="dark-content">
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/arrow.webp')}
            style={styles.image}
          />
        </TouchableOpacity>
        <TextStyle
          textInput="Detail Transaksi"
          fontSize={19}
          fontWeight={'500'}
        />
      </View>
      <ScrollView
        contentContainerStyle={[styles.scrollContainer, {paddingBottom: 40}]}
        keyboardShouldPersistTaps="handled">
        <View style={styles.viewStatus}>
          <Image
            source={
              data.status === 0
                ? iconGagal
                : data.status === 1
                ? iconPending
                : iconSuccess
            }
            style={styles.imageStatus}
          />
          <TextStyle
            textInput={`Pembayaran ${
              data.status === 0
                ? 'Gagal'
                : data.status === 1
                ? 'Pending'
                : 'Berhasil'
            }`}
            fontSize={19}
            color={
              data.status === 0
                ? '#DC2626'
                : data.status === 1
                ? '#CA8A04'
                : '#006837'
            }
          />
          <TextStyle
            textInput={`Rp.${data.transaksi.toLocaleString()}`}
            fontSize={28}
            fontWeight={'bold'}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TextStyle textInput={data.tanggal} />
            <TextStyle textInput={' . '} color="#4B5563" />
            <TextStyle textInput={data.waktu} />
          </View>
        </View>
        <View style={{marginTop: 10, gap: 10}}>
          <Image source={{uri: data.image_url}} style={styles.imageIuran} />
          <TextStyle textInput={data.title} fontSize={18} fontWeight={'500'} />
        </View>
        <View style={{marginTop: 10}}>
          <TextStyle
            textInput={'Detail Pembayaran'}
            fontSize={16}
            fontWeight={'500'}
          />
        </View>
        <View style={styles.detailPembayaran}>
          <TextStyle textInput={'ID Transaksi'} fontSize={16} />
          <TextStyle
            textInput={data.idTransaksi}
            fontSize={16}
            fontWeight={'500'}
          />
        </View>
        <View style={styles.detailPembayaran}>
          <TextStyle textInput={'Tanggal'} fontSize={16} />
          <TextStyle
            textInput={`${data.tgl} . ${data.waktu}`}
            fontSize={16}
            fontWeight={'500'}
          />
        </View>
        <View style={styles.detailPembayaran}>
          <TextStyle textInput={'Metode Pembayaran'} fontSize={16} />
          <TextStyle
            textInput={data.metodePembayaran}
            fontSize={16}
            fontWeight={'500'}
          />
        </View>
        <View style={styles.detailPembayaran}>
          <TextStyle textInput={'Nominal Iuran'} fontSize={16} />
          <TextStyle
            textInput={data.transaksi.toLocaleString()}
            fontSize={16}
            fontWeight={'500'}
          />
        </View>
        <View style={styles.detailPembayaran}>
          <TextStyle textInput={'Biaya Admin'} fontSize={16} />
          <TextStyle
            textInput={data.biayaPlatfom}
            fontSize={16}
            fontWeight={'500'}
          />
        </View>
        <View style={styles.detailPembayaran}>
          <TextStyle textInput={'Total Pembayaran'} fontSize={16} />
          <TextStyle
            textInput={`Rp.${(
              data.transaksi + data.biayaPlatfom
            ).toLocaleString()}`}
            fontSize={16}
            fontWeight={'bold'}
            color="#006837"
          />
        </View>
        {data.status === 0 || data.status === 1 ? null : (
          <View style={{paddingVertical: 10, gap: 10}}>
            <ButtonOutlineStyle title="Bagikan Bukti Transfer" />
            <ButtonStyle title="Iuran Lagi" />
          </View>
        )}
      </ScrollView>
    </SafeAreaContainer>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    gap: 15,
    paddingHorizontal: 16,
  },
  image: {
    width: 25,
    height: 25,
    borderRadius: 5,
  },
  imageStatus: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  viewStatus: {
    alignItems: 'center',
    paddingTop: 20,
    gap: 10,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 55,
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  imageIuran: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  detailPembayaran: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    paddingBottom: 2,
  },
});
