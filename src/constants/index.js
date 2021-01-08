import {Dimensions, StyleSheet} from 'react-native';

export const apiKey = '4d4d15ebf797f4e57e1c194f6297b2e0';
export const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?';

export const screenWidth = Math.round(Dimensions.get('window').width);
export const screenHeight = Math.round(Dimensions.get('window').height);

export const colors = {
  primaryColor: '#2B1E4F',
  backgroundColor: '#EDE7F6',
  whiteColor: '#FFFFFF',
};

export const fontSizes = {
  big: screenWidth * 0.15,
  normal: screenWidth * 0.042,
  heading: screenWidth * 0.053,
  description: screenWidth * 0.038,
};

export const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 12,
    height: screenWidth * 0.1,
    width: screenWidth * 0.75,
    padding: screenWidth * 0.03,
    marginHorizontal: screenWidth * 0.03,
    borderColor: colors.primaryColor,
    backgroundColor: colors.whiteColor,
  },
  text: {
    color: colors.primaryColor,
    backgroundColor: colors.backgroundColor,
  },
  bgImage: {
    bottom: 0,
    position: 'absolute',
    height: 350,
    width: screenWidth,
    zIndex: -99,
  },
  fabButton: {
    top: screenWidth * 0.18,
    right: 15,
    height: 40,
    width: 40,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primaryColor,
  },
});
