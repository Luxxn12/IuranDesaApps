import React from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SafeAreaContainer from '../../components/SafeAreaContainer';
import TextStyle from '../../components/TextStyle';
import {Riwayats} from '../../types/riwayat';

export default function RiwayatPage({navigation}: any) {
  const Riwayat: Riwayats = [
    {
      id: 1,
      title: 'Perbaiki Masjid',
      location: 'Dusun Kalirejo',
      transaksi: 100000,
      tgl: '21 Des 2024',
      tanggal: '21 Desember 2024',
      waktu: '14.30 WIB',
      status: 2,
      metodePembayaran: 'BCA',
      biayaPlatfom: 0,
      idTransaksi: 'TRX123456789',
      image_url:
        'https://asset.kompas.com/crops/jSf8EoIK4ivfIJhtHHxKPgD_eZ4=/65x0:2315x1500/1200x800/data/photo/2022/04/04/624a7926119da.jpg',
    },
    {
      id: 2,
      title: 'Bersih - Bersih Lingkungan',
      location: 'Dusun Kalirejo',
      transaksi: 350000,
      tgl: '20 Nov 2024',
      tanggal: '20 November 2024',
      waktu: '10.30 WIB',
      status: 1,
      metodePembayaran: 'QRIS',
      biayaPlatfom: 0,
      idTransaksi: 'TRX123456710',
      image_url:
        'https://dlh.semarangkota.go.id/wp-content/uploads/2021/02/wrodpres_-com-1024x683.jpg',
    },
    {
      id: 3,
      title: 'Bersih - Bersih Desa',
      location: 'Dusun Kalirejo',
      transaksi: 200000,
      tgl: '10 Nov 2024',
      tanggal: '10 November 2024',
      waktu: '10.30 WIB',
      status: 0,
      metodePembayaran: 'QRIS',
      biayaPlatfom: 0,
      idTransaksi: 'TRX123456000',
      image_url:
        'https://dlh.semarangkota.go.id/wp-content/uploads/2021/02/wrodpres_-com-1024x683.jpg',
    },
  ];

  return (
    <SafeAreaContainer backgroundColor="#FFFFFF" barStyle="dark-content">
      <View style={styles.program}>
        <TextStyle textInput={'Riwayat'} fontSize={24} fontWeight={'bold'} />
        <TextStyle textInput={'Daftar Iuran yang telah Anda lakukan'} />
        <View style={{paddingTop: 15}}>
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            keyboardShouldPersistTaps="handled">
            {Riwayat.map(riwayat => (
              <TouchableOpacity key={riwayat.id} style={styles.border}
              onPress={() => navigation.navigate("DetailRiwayat", {
                data : riwayat
              })}
              >
                <View style={styles.riwayat}>
                  <Image
                    source={{uri: riwayat.image_url}}
                    style={styles.image}
                  />
                  <View style={styles.title}>
                    <TextStyle
                      textInput={riwayat.title}
                      fontSize={16}
                      fontWeight={'500'}
                    />
                    <TextStyle textInput={riwayat.tgl} color="#4B5563" />
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <View>
                        <TextStyle
                          textInput={`Rp.${riwayat.transaksi.toLocaleString()}`}
                          fontSize={16}
                          fontWeight={'500'}
                          color="#0B6E4F"
                        />
                      </View>
                      <View
                        style={{
                          padding: 2,
                          paddingHorizontal: 10,
                          borderRadius: 10,
                          backgroundColor:
                            riwayat.status === 0
                              ? '#FEE2E2'
                              : riwayat.status === 1
                              ? '#FEF9C3'
                              : '#DCFCE7',
                        }}>
                        <TextStyle
                          textInput={
                            riwayat.status === 0
                              ? 'Gagal'
                              : riwayat.status === 1
                              ? 'Pending'
                              : 'Berhasil'
                          }
                          color={
                            riwayat.status === 0
                              ? '#DC2626'
                              : riwayat.status === 1
                              ? '#CA8A04'
                              : '#16A34A'
                          }
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaContainer>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    gap: 15, 
  },
  program: {
    paddingTop: 50,
    paddingHorizontal: 16,
    paddingBottom: 20,
    gap: 5,
  },
  border: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 5,
  },
  riwayat: {
    flexDirection: 'row',
    gap: 10,
  },
  title: {
    gap: 5,
    flex: 1,
  },
  transaksi: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
