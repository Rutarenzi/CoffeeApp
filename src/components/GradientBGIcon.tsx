import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import CustomIcon from './CustomIcon'
import { COLORS, SPACING } from '../theme/theme'

interface GradientBGIconProps {
  name: string
  color: string
  size: number
}

const GradientBGIcon: React.FC<GradientBGIconProps> = ({ name, color, size }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[COLORS.primaryDarkGreyHex, COLORS.primaryBlackHex]}
        style={styles.linearGradientBG}
      >
        <CustomIcon name={name} size={size} color={color} />
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    borderRadius: SPACING.space_12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.secondaryDarkGreyHex,
    overflow: 'hidden'
  },
  linearGradientBG: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
export default GradientBGIcon
