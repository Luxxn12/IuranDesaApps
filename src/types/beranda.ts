import {ImageSourcePropType} from 'react-native';

interface IuranProgram {
  id: number;
  title: string;
  location: string;
  amount_collected: number;
  total_amount: number;
  image_url: string
  deskripsi: string
}

export type IuranPrograms = IuranProgram[];
