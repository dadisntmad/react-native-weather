import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

type Forecast = {
  forecast: {
    id: string;
    time: string;
    image: string;
    temp: string;
  };
};

export const Forecast = ({ forecast }: Forecast) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Text style={styles.time}>{forecast.time}</Text>
          <Image style={styles.icon} source={forecast.image} />
          <Text style={styles.temp}>{forecast.temp}</Text>
        </View>
      </View>
    </View>
  );
};
