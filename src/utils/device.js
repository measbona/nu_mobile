import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

const screenWidth = width;

const screenHeight = height;

const isIphoneX = Platform.OS === 'ios' && height >= 812;

const isIOS = Platform.OS === 'ios';

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
};
