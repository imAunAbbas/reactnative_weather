import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {colors, fontSizes} from '../constants';

const MainScreen = () => {
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
        <Text style={{color: colors.primaryColor, fontSize: fontSizes.heading}}>
          Welcome
        </Text>
      </View>
    </>
  );
};

export default MainScreen;
