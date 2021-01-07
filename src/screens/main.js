import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  StatusBar,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {colors, styles, fontSizes, apiKey, weatherURL} from '../constants';

import Geolocation from '@react-native-community/geolocation';

const MainScreen = () => {
  const [temp, setTemp] = useState(45);
  const [city, setCity] = useState('Islamabad');
  const [country, setCountry] = useState('PK');
  const [search, setSearch] = useState('');

  // '$weatherURLq=$cityName&appid=$apiKey&units=metric'
  // '$weatherURLlat=${location.latitude}&lon=${location.longitude}&appid=$apiKey&units=metric'

  const getLocationTemp = () => {
    Geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        console.log(lat + ' ' + long);
      },
      () => Alert.alert('Error', 'Please turn on device location first'),
      {enableHighAccuracy: true, timeout: 3000, maximumAge: 1000},
    );
  };

  const getCityTemp = () => {};

  useEffect(() => {
    setTimeout(getLocationTemp, 2000);
  });

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.primaryColor}
      />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-start',
          backgroundColor: colors.backgroundColor,
        }}>
        <View
          style={{
            marginTop: 10,
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexDirection: 'row',
          }}>
          <TextInput
            keyboardType="default"
            autoCorrect={false}
            autoCompleteType="off"
            style={styles.input}
            blurOnSubmit
            placeholder="Search City"
            returnKeyType="done"
            onChangeText={setSearch}
            value={search}
          />
          <Text
            style={{
              color: colors.primaryColor,
              fontSize: fontSizes.description,
            }}
            onPress={getCityTemp}>
            Search
          </Text>
        </View>
        <Text style={{color: colors.primaryColor, fontSize: fontSizes.heading}}>
          {city}, {country}
        </Text>
        <Text style={{color: colors.primaryColor, fontSize: fontSizes.big}}>
          {temp}°c
        </Text>
        <TouchableOpacity style={styles.fabButton} onPress={getLocationTemp}>
          <Image source={require('../images/gps.png')} />
        </TouchableOpacity>
        <ImageBackground
          source={require('../images/background.png')}
          style={styles.background}
        />
      </View>
    </>
  );
};

export default MainScreen;
