import React from 'react';
import {
  View,
  Text,
  Modal,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

export const apiKey = '4d4d15ebf797f4e57e1c194f6297b2e0';
export const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?';

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
    marginBottom: 20,
    marginHorizontal: screenWidth * 0.03,
    borderColor: colors.primaryColor,
    backgroundColor: colors.whiteColor,
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
  background: {
    bottom: 0,
    position: 'absolute',
    height: 350,
    width: screenWidth,
    zIndex: -99,
  },
  fabButton: {
    top: 80,
    right: 20,
    height: 40,
    width: 40,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primaryColor,
  },
  centeredView: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// export const Loading = (props) => {
//   const {visibility} = props;

//   return (
//     <Modal
//       style={styles.centeredView}
//       animationType="fade"
//       transparent={true}
//       visible={visibility}>
//       <View
//         style={{
//           height: screenHeight,
//           width: screenWidth,
//           alignItems: 'center',
//           justifyContent: 'center',
//           backgroundColor: colors.blur,
//         }}>
//         <View
//           style={{
//             alignItems: 'center',
//             justifyContent: 'center',
//             borderRadius: 8,
//             height: screenWidth * 0.4,
//             width: screenWidth * 0.6,
//             backgroundColor: colors.whiteColor,
//           }}>
//           <ActivityIndicator size="large" color={colors.primaryColor} />
//           <Text
//             style={{
//               color: colors.secondaryColor,
//               fontSize: 18,
//               marginTop: 10,
//             }}>
//             Please wait...
//           </Text>
//         </View>
//       </View>
//     </Modal>
//   );
// };
