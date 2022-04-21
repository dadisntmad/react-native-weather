import React from 'react';
import { View, Text, Pressable, Image, FlatList } from 'react-native';
import { Forecast } from '../../components/Forecast/Forecast';

import { EvilIcons } from '@expo/vector-icons';

import sunny from '../../../assets/weather/sunny.png';
import rain from '../../../assets/weather/rain.png';
import cloudy from '../../../assets/weather/cloudy.png';
import fog from '../../../assets/weather/fog.png';
import snow from '../../../assets/weather/snow.png';

import styles from './styles';

const data = [
  {
    id: '1',
    time: '15:00',
    image: sunny,
    temp: '17°',
  },
  {
    id: '2',
    time: '18:00',
    image: rain,
    temp: '17°',
  },
  {
    id: '3',
    time: '21:00',
    image: cloudy,
    temp: '17°',
  },
  {
    id: '4',
    time: '00:00',
    image: fog,
    temp: '17°',
  },
  {
    id: '5',
    time: '03:00',
    image: snow,
    temp: '17°',
  },
];

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <EvilIcons style={styles.icon} name="search" size={36} color="white" />
      </Pressable>
      <View style={styles.location}>
        <Text style={styles.city}>London,</Text>
        <Text style={styles.country}>United Kingdom</Text>
        <Text style={styles.date}>Thursday 21 April 2022</Text>
      </View>
      <View style={styles.weather}>
        <Text style={styles.temperature}>17°</Text>
        <View style={styles.weatherInfo}>
          <Image source={sunny} style={{ width: 25, height: 25 }} />
          <Text style={styles.description}>Sunny</Text>
        </View>
      </View>
      <View style={styles.forecast}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Forecast forecast={item} />}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </View>
    </View>
  );
};
