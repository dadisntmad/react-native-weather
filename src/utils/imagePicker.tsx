import React from 'react';
import { Image } from 'react-native';

import freezingRain from '../../assets/weather/chancerain.png';
import thunderStorms from '../../assets/weather/chancetstorms.png';
import clear from '../../assets/weather/sunny.png';
import cloudy from '../../assets/weather/cloudy.png';
import flurries from '../../assets/weather/flurries.png';
import atmosphere from '../../assets/weather/fog.png';
import mostlyCloudy from '../../assets/weather/mostlycloudy.png';
import fewClouds from '../../assets/weather/partlysunny.png';
import rain from '../../assets/weather/rain.png';
import snow from '../../assets/weather/snow.png';
import unknown from '../../assets/weather/unknown.png';

export const imagePicker = (condition: number) => {
  switch (condition) {
    case 200:
    case 201:
    case 202:
    case 210:
    case 211:
    case 212:
    case 221:
    case 230:
    case 231:
    case 232:
      return (
        <Image source={thunderStorms} style={{ width: 35, height: 35, resizeMode: 'contain' }} />
      );
    case 300:
    case 301:
    case 302:
    case 310:
    case 311:
    case 312:
    case 313:
    case 314:
    case 321:
      return <Image source={unknown} style={{ width: 35, height: 35, resizeMode: 'contain' }} />;
    case 500:
    case 501:
    case 502:
    case 503:
    case 504:
      return <Image source={rain} style={{ width: 35, height: 35, resizeMode: 'contain' }} />;
    case 511:
      return (
        <Image source={freezingRain} style={{ width: 35, height: 35, resizeMode: 'contain' }} />
      );
    case 520:
    case 521:
    case 522:
    case 531:
      return <Image source={flurries} style={{ width: 35, height: 35, resizeMode: 'contain' }} />;
    case 600:
    case 601:
    case 602:
    case 611:
    case 612:
    case 613:
    case 615:
    case 616:
    case 620:
    case 621:
    case 622:
      return <Image source={snow} style={{ width: 35, height: 35, resizeMode: 'contain' }} />;
    case 701:
    case 711:
    case 721:
    case 731:
    case 741:
    case 751:
    case 761:
    case 762:
    case 771:
    case 781:
      return <Image source={atmosphere} style={{ width: 35, height: 35, resizeMode: 'contain' }} />;
    case 800:
      return <Image source={clear} style={{ width: 35, height: 35, resizeMode: 'contain' }} />;
    case 801:
      return <Image source={fewClouds} style={{ width: 35, height: 35, resizeMode: 'contain' }} />;
    case 802:
      return <Image source={cloudy} style={{ width: 35, height: 35, resizeMode: 'contain' }} />;
    case 803:
    case 804:
      return (
        <Image source={mostlyCloudy} style={{ width: 35, height: 35, resizeMode: 'contain' }} />
      );
    default:
      return <Image source={unknown} style={{ width: 35, height: 35, resizeMode: 'contain' }} />;
  }
};
