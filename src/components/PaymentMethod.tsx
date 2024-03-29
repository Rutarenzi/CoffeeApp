import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import CustomIcon from './CustomIcon'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'

interface PaymentMethodProps {
  paymentMode: string
  name: string
  icon: any
  isIcon: boolean
}
const PaymentMethod: React.FC<PaymentMethodProps> = ({ paymentMode, name, icon, isIcon }) => {
  return (
    <View
      style={[
        styles.PaymentCardContainer,
        {
          borderColor: paymentMode == name ? COLORS.primaryOrangeHex : COLORS.primaryGreyHex
        }
      ]}
    >
      {isIcon ? (
        <LinearGradient
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
          style={styles.LinearGradientWallet}
        >
          <View style={styles.WalletRow}>
            <CustomIcon name="wallet" color={COLORS.primaryOrangeHex} size={FONTSIZE.size_30} />
            <Text style={styles.PaymentTitle}>{name}</Text>
          </View>
          <Text style={styles.PaymentPrice}>$ 100.50</Text>
        </LinearGradient>
      ) : (
        <LinearGradient
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
          style={styles.LinearGradientRegular}
        >
          <Image source={icon} style={styles.PaymentImage} />
          <Text style={styles.PaymentTitle}>{name}</Text>
        </LinearGradient>
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  PaymentCardContainer: {
    borderRadius: BORDERRADIUS.radius_15 * 2,
    backgroundColor: COLORS.primaryGreyHex,
    borderWidth: 3
  },
  LinearGradientWallet: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.space_12,
    paddingHorizontal: SPACING.space_24,
    gap: SPACING.space_24,
    borderRadius: BORDERRADIUS.radius_15 * 2
  },
  WalletRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.space_24
  },
  PaymentTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex
  },
  PaymentPrice: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
    color: COLORS.secondaryLightGreyHex
  },
  LinearGradientRegular: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.space_12,
    paddingHorizontal: SPACING.space_24,
    gap: SPACING.space_24,
    borderRadius: BORDERRADIUS.radius_15 * 2
  },
  PaymentImage: {
    height: SPACING.space_30,
    width: SPACING.space_30
  }
})
export default PaymentMethod
