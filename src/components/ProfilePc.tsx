import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

import { SPACING, COLORS } from '../theme/theme'

const ProfilePc = () => {
  return (
    <View style={styles.ImageContainer}>
      <Image style={styles.Image} source={require('../assets/app_images/avatar.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
  ImageContainer: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    borderRadius: SPACING.space_12,
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  Image: {
    height: SPACING.space_36,
    width: SPACING.space_36
  }
})
export default ProfilePc
