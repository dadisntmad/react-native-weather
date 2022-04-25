import React from 'react';
import { View, Text, Image } from 'react-native';
import { ForecastType } from '../../types/weather';
import { imagePicker } from '../../utils/imagePicker';

import styles from './styles';

type ForecastProps = {
  forecast: ForecastType;
};

export const Forecast = ({ forecast }: ForecastProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Text style={styles.time}>{forecast.dt_txt.slice(5, -3)}</Text>
          {imagePicker(forecast.weather[0].id)}
          <Text style={styles.temp}>{Math.round(forecast.main.temp)}°</Text>
        </View>
      </View>
    </View>
  );
};
