import React, {useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import {colors, styles, fontSizes} from '../constants';

const SplashScreen = (props) => {
  useEffect(() => {
    setTimeout(nav, 2000);
  });

  const nav = () => {
    props.navigation.replace('Main');
  };

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
          justifyContent: 'center',
          backgroundColor: colors.backgroundColor,
        }}>
        <Text
          style={{
            ...styles.text,
            fontSize: fontSizes.heading,
            fontWeight: '700',
            marginBottom: 50,
          }}>
          Weather App
        </Text>
        <ActivityIndicator size="large" color={colors.primaryColor} />
        <Text
          style={{
            color: colors.primaryColor,
            fontSize: 18,
            marginTop: 10,
          }}>
          Loading...
        </Text>
        <ImageBackground
          source={require('../images/background.png')}
          style={styles.bgImage}
        />
      </View>
    </>
  );
};

export default SplashScreen;
