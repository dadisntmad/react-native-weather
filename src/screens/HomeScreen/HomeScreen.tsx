import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Forecast } from '../../components/Forecast/Forecast';
import { useSelector } from 'react-redux';
import { selectWeather } from '../../selectors/selectors';
import { getCurrentDate } from '../../utils/getDate';
import { imagePicker } from '../../utils/imagePicker';

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
  const weather = useSelector(selectWeather);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <SearchBar />
      </View>
      {weather.main ? (
        <View>
          <View style={styles.location}>
            <Text style={styles.city}>{weather.name},</Text>
            <Text style={styles.country}>{weather.sys?.country}</Text>
            <Text style={styles.date}>{getCurrentDate()}</Text>
          </View>
          <View style={styles.weather}>
            <Text style={styles.temperature}>{Math.round(weather.main.temp)}°</Text>
            <View style={styles.weatherInfo}>
              {imagePicker(weather.weather[0].id)}
              <Text style={styles.description}>{weather.weather[0].description}</Text>
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
      ) : (
        <View style={styles.empty}>
          <Text style={styles.emptyIcon}>no data 🙃</Text>
        </View>
      )}
    </View>
  );
};
