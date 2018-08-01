import { Dimensions } from 'react-native';

const { w, h } = Dimensions.get('window');

export default {
    basePadding: 20,
    baseMargin: 10,
    baseRadius: 3,
    screenWidth: w < h ? w : h,
    screenHeight: w < h ? h : w,
};
