import React from 'react';
import {
  View,
  Text,
  Modal,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

export const apiKey = 'fde445972e219b09d2781e68aa94f049'; // <-- your API key here.
export const weatherURL = 'https://api.openweathermap.org/data/2.5/weather';

export const screenWidth = Math.round(Dimensions.get('window').width);
export const screenHeight = Math.round(Dimensions.get('window').height);

export const colors = {
  primaryColor: '#2B1E4F',
  secondaryColor: '#4B416B',
  dashboardColor: '#977dd7',
  backgroundColor: '#EDE7F6',
  lightGrey: '#f0f0f4',
  whiteColor: '#FFFFFF',
  blur: '#00000090',
  transparent: '#00000000',
};

export const fontSizes = {
  normal: screenWidth * 0.042,
  heading: screenWidth * 0.053,
  description: screenWidth * 0.038,
};

export const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 12,
    shadowRadius: 2,
    shadowOpacity: 0.95,
    elevation: 15,
    shadowRadius: 4,
    padding: screenWidth * 0.03,
    margin: screenWidth * 0.03,
    marginTop: screenWidth * 0.01,
    height: screenWidth * 0.1,
    width: screenWidth * 0.75,
    shadowColor: colors.primaryColor,
    backgroundColor: colors.whiteColor,
    shadowOffset: {width: 0, height: 1},
    borderColor: colors.primaryColor,
  },
  button: {
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    height: screenWidth * 0.1,
    width: screenWidth * 0.75,
    marginTop: screenWidth * 0.04,
    backgroundColor: colors.secondaryColor,
  },
  centeredView: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const Loading = (props) => {
  const {visibility} = props;

  return (
    <Modal
      style={styles.centeredView}
      animationType="fade"
      transparent={true}
      visible={visibility}>
      <View
        style={{
          height: screenHeight,
          width: screenWidth,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.blur,
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
            height: screenWidth * 0.4,
            width: screenWidth * 0.6,
            backgroundColor: colors.whiteColor,
          }}>
          <ActivityIndicator size="large" color={colors.primaryColor} />
          <Text
            style={{
              color: colors.secondaryColor,
              fontSize: 18,
              marginTop: 10,
            }}>
            Please wait...
          </Text>
        </View>
      </View>
    </Modal>
  );
};
