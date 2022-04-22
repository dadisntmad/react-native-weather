import React from 'react';
import { TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../../redux/actions/weather';
import { setLocation } from '../../redux/reducers/weatherSlice';
import { selectLocation } from '../../selectors/selectors';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const location = useSelector(selectLocation);

  const searchForWeather = () => {
    dispatch(fetchWeather(location));
    dispatch(setLocation(''));
  };

  return (
    <TextInput
      style={{ flex: 1, color: 'white', paddingVertical: 10, fontSize: 16 }}
      placeholder="Enter location..."
      value={location}
      onChangeText={(text) => dispatch(setLocation(text))}
      clearButtonMode="always"
      placeholderTextColor="#ebebeb"
      returnKeyType="search"
      onSubmitEditing={searchForWeather}
    />
  );
};
