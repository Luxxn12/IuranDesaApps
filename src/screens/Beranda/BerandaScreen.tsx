import React from 'react';
import {Image, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import InputStyle from '../../components/InputStyle';
import SafeAreaContainer from '../../components/SafeAreaContainer';
import TextStyle from '../../components/TextStyle';
import {IuranPrograms} from '../../types/beranda';
import {ProgressView} from '@react-native-community/progress-view';

export default function BerandaPage({navigation}: any) {
  const Projects: IuranPrograms = [
    {
      id: 1,
      title: 'Perbaiki Masjid',
      location: 'Dusun Kalirejo',
      amount_collected: 800000,
      total_amount: 1500000,
      deskripsi:
        'Mari bergabung dalam kegiatan bersih-bersih untuk meningkatkan dan mempercantik lingkungan desa kita.',
      image_url: "https://asset.kompas.com/crops/jSf8EoIK4ivfIJhtHHxKPgD_eZ4=/65x0:2315x1500/1200x800/data/photo/2022/04/04/624a7926119da.jpg",
    },
    {
      id: 2,
      title: 'Bersih - Bersih Lingkungan',
      location: 'Dusun Kalirejo',
      amount_collected: 1200000,
      total_amount: 1500000,
      deskripsi:
        'Mari bergabung dalam kegiatan bersih-bersih untuk meningkatkan dan mempercantik lingkungan desa kita.',
      image_url: "https://dlh.semarangkota.go.id/wp-content/uploads/2021/02/wrodpres_-com-1024x683.jpg",
    },
  ];
  return (
    <SafeAreaContainer backgroundColor="#FFFFFF" barStyle="dark-content">
      <View style={styles.program}>
        <TextStyle textInput={'Iuran Desa Apps'} fontSize={20} fontWeight={'bold'} color='#0B6E4F' />
        <View style={styles.search}>
          <InputStyle
            placeholder="Search"
            iconSource={require('../../assets/search.webp')}
            padding={1}
          />
        </View>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled">
        <View style={styles.allProgram}>
          {Projects.map((project) => (
            <TouchableOpacity key={project.id} style={styles.projectContainer}
            onPress={() => navigation.navigate("DetailIuran", {
              data : project
            })}
            >
              <Image source={{ uri: project.image_url }} style={styles.image} />
              <View style={styles.viewData}>
                <TextStyle
                  textInput={project.title}
                  fontSize={16}
                  fontWeight={'bold'}
                />
                <View style={styles.location}>
                  <Image
                    style={styles.imageLocation}
                    source={require('../../assets/location.webp')}
                  />
                  <TextStyle textInput={project.location} color="#888888" />
                </View>
                <View>
                  <ProgressView
                    progressTintColor="#0B6E4F"
                    trackTintColor="#BCBDC1FF"
                    progress={
                      project.total_amount > 0
                        ? project.amount_collected / project.total_amount
                        : 0
                    }
                  />
                  <TextStyle
                    textInput={`Terkumpul Rp.${project.amount_collected.toLocaleString()} dari Rp.${project.total_amount.toLocaleString()}`}
                  />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaContainer>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 16,
  },
  program: {
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  allProgram: {
    gap: 20,
  },
  search: {
    paddingTop: 10,
  },
  projectContainer: {
    borderColor: '#E5E7EB',
    borderWidth: 1,
    borderRadius: 12,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  location: {
    gap: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 5,
  },
  imageLocation: {
    width: 20,
    height: 20,
  },
  viewData: {
    padding: 5,
    paddingHorizontal: 10,
    gap: 3,
  },
});
