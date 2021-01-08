import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  Keyboard,
  StatusBar,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  colors,
  styles,
  fontSizes,
  apiKey,
  weatherURL,
  screenWidth,
} from '../constants';

import Geolocation from '@react-native-community/geolocation';

const MainScreen = () => {
  const [flag, setFlag] = useState(false);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState('--');
  const [country, setCountry] = useState('--');
  const [description, setDescription] = useState('--');
  const [search, setSearch] = useState('');

  const getLocationTemp = () => {
    Geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        const response = await fetch(
          `${weatherURL}lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`,
        );
        if (response.status === 200) {
          let json = await response.json();
          setCity(json.name);
          setCountry(json.sys.country);
          setTemp(parseInt(json.main.temp));
          setDescription(json.weather[0].description);
        } else {
          Alert.alert(
            'Network Error',
            'Please check your network connection and try again.',
          );
        }
      },
      () =>
        Alert.alert(
          'Error',
          'Turn on device location or allow location access from settings',
        ),
      {enableHighAccuracy: true, timeout: 3000, maximumAge: 1000},
    );
  };

  const getCityTemp = async () => {
    if (!search) return;
    const response = await fetch(
      `${weatherURL}q=${search}&appid=${apiKey}&units=metric`,
    );
    if (response.status === 200) {
      let json = await response.json();
      setSearch('');
      setCity(json.name);
      setCountry(json.sys.country);
      setTemp(parseInt(json.main.temp));
      setDescription(json.weather[0].description);
    } else if (response.status === 404) {
      Alert.alert('Error', 'City not found');
      setSearch('');
    } else {
      Alert.alert(
        'Network Error',
        'Please check your network connection and try again.',
      );
    }
  };

  useEffect(() => {
    if (!flag) {
      setFlag(true);
      setTimeout(getLocationTemp, 1000);
    }
  });

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.primaryColor}
      />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
              justifyContent: 'center',
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
            <TouchableOpacity onPress={getCityTemp}>
              <Text
                style={{
                  color: colors.primaryColor,
                  fontSize: fontSizes.description,
                }}>
                Search
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              ...styles.text,
              marginTop: screenWidth * 0.2,
              fontSize: fontSizes.heading,
            }}>
            {city}, {country}
          </Text>
          <Text style={{...styles.text, fontSize: fontSizes.big}}>
            {temp}°c
          </Text>
          <Text style={{...styles.text, fontSize: fontSizes.description}}>
            {description}
          </Text>
          <TouchableOpacity style={styles.fabButton} onPress={getLocationTemp}>
            <Image source={require('../images/gps.png')} />
          </TouchableOpacity>
          <ImageBackground
            source={require('../images/background.png')}
            style={styles.bgImage}
          />
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default MainScreen;
