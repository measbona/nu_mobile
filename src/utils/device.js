import {Dimensions, Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const {width, height} = Dimensions.get('window');

const screenWidth = width;

const screenHeight = height;

const isIphoneX = Platform.OS === 'ios' && height >= 812;

const isIOS = Platform.OS === 'ios';

const isAndroid = Platform.OS === 'android';

const isNotch = () => {
  let value = 0;

  if (isAndroid && DeviceInfo.hasNotch()) {
    value = 70;
  } else if (isAndroid) {
    value = 80;
  }

  if (isIOS) {
    value = 120;
  }

  return value;
};

const devicePaddingTop = () => {
  let value = 0;

  if (isIphoneX) {
    value = 44;
  } else if (isIOS) {
    value = 20;
  }

  return value;
};

export default {
  screenWidth,
  screenHeight,
  devicePaddingTop,
  isNotch,
};
