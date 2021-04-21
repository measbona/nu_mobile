import {startApp} from './src/navigation';
import {typography} from './src/utils/typography';
import SplashScreen from 'react-native-splash-screen';

setTimeout(() => {
  SplashScreen.hide();
}, 1000);

typography();
startApp();
