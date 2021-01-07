import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {colors, fontSizes} from '../constants';
import {SplashScreen, MainScreen} from '../screens';

const MainStack = createStackNavigator(
  {
    Start: {
      screen: SplashScreen,
      navigationOptions: () => ({
        headerShown: false,
      }),
    },
    Main: {
      screen: MainScreen,
      navigationOptions: () => ({
        title: 'Main Screen',
        headerTitleStyle: {
          fontSize: fontSizes.normal,
        },
        headerTintColor: colors.backgroundColor,
        headerStyle: {
          backgroundColor: colors.primaryColor,
        },
      }),
    },
  },
  {
    initialRouteName: 'Start',
  },
);

const MainNavigator = createAppContainer(MainStack);
export default MainNavigator;
