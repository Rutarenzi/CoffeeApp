import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../theme/theme';

interface PopupAnimation {
    style: any;
     source?: any;
}

const PopupAnimation: React.FC<PopupAnimation> = ({style,source}) => {
  return (
    <View style={styles.LottieAnimation}>
      <Text style={style}>PopupAnimation</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    LottieAnimation: {
        flex: 1,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: COLORS.primaryBlackRGBA,
        justifyContent: 'center'
    }
})
export default PopupAnimation

