import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Forecast } from '../../components/Forecast/Forecast';
import { useSelector } from 'react-redux';
import { selectForecast, selectWeather } from '../../selectors/selectors';
import { getCurrentDate } from '../../utils/getDate';
import { imagePicker } from '../../utils/imagePicker';

import styles from './styles';

export const HomeScreen = () => {
  const weather = useSelector(selectWeather);
  const forecast = useSelector(selectForecast);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <SearchBar />
      </View>
      {weather.main ? (
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
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
              data={forecast}
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
