import {PixelRatio, Platform, Dimensions,StatusBar} from 'react-native';
const {width: DEVICE_WIDTH, height: DEVICE_HEIGHT} = Dimensions.get('window');

const WIDTH_SCALE = DEVICE_WIDTH / 375;
const HEIGHT_SCALE = DEVICE_HEIGHT / 812;
const DEVICE_PADDING_WIDTH = DEVICE_WIDTH - 40;
const BORDER_RADIUS = 10;
const LOWER_BORDER_RADIUS = 5;

export const getScaledValue = (size = 0, height = 0) => {
  if (size !== 0) {
    const newSize = size * WIDTH_SCALE
    if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
  } else {
    const newSize = height * HEIGHT_SCALE
    if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
  }
}

export const relativeWidth = (width = 0) => {
  const newVal = WIDTH_SCALE < HEIGHT_SCALE? WIDTH_SCALE: HEIGHT_SCALE;
  const newSize = width * WIDTH_SCALE;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

export const relativeHeight = (height = 0) => {
  const newVal = WIDTH_SCALE > HEIGHT_SCALE? WIDTH_SCALE: HEIGHT_SCALE;
  const newSize = height * HEIGHT_SCALE;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

export {
  DEVICE_WIDTH,
  DEVICE_HEIGHT,
  DEVICE_PADDING_WIDTH,
  BORDER_RADIUS,
  LOWER_BORDER_RADIUS
}
