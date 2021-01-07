import React, {useEffect} from 'react';
import {View, Text, StatusBar, ActivityIndicator} from 'react-native';
import {colors} from '../constants';

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
        <ActivityIndicator size="large" color={colors.primaryColor} />
        <Text
          style={{
            color: colors.secondaryColor,
            fontSize: 18,
            marginTop: 10,
          }}>
          Launching App...
        </Text>
      </View>
    </>
  );
};

export default SplashScreen;
