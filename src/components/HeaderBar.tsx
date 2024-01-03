import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FONTFAMILY, FONTSIZE, SPACING,COLORS } from '../theme/theme'
import GradientBGIcon from './GradientBGIcon'
import ProfilePc from './ProfilePc'

interface HeaderBarProps {
    title?:string
}

const HeaderBar: React.FC<HeaderBarProps> = ({title}) => {

  return (
    <View style={styles.HeaderContainer}>
        <GradientBGIcon name={''} color={''} size={''}/>
      <Text style={styles.HeaderText}>{title}</Text>
      <ProfilePc />
    </View>
  )
}
const styles = StyleSheet.create({
    HeaderContainer: {
        padding: SPACING.space_30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    HeaderText: {
        // fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_20,
        color: COLORS.primaryWhiteHex
    }
})

export default HeaderBar

