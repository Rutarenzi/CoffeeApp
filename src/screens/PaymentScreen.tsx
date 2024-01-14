import React, { useState } from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'
import GradientBGIcon from '../components/GradientBGIcon'
import PaymentMethod from '../components/PaymentMethod'
import PaymentFooter from '../components/PaymentFooter'
import { LinearGradient } from 'expo-linear-gradient'
import CustomIcon from '../components/CustomIcon'

const PaymentList = [
  {
    name: 'wallet',
    icon: 'icon',
    isIcon: true
  },
  {
    name: 'google',
    icon: require('../assets/app_images/gpay.png'),
    isIcon: false
  },
  {
    name: 'Apple Pay',
    icon: require('../assets/app_images/applepay.png'),
    isIcon: false
  },
  {
    name: 'Amazon Pay',
    icon: require('../assets/app_images/amazonpay.png'),
    isIcon: false
  }
]


const PaymentScreen = ({navigation,route}:any) => {
const [paymentMode,setPaymentMode] = useState('Credit Card');
const buttonPressHandler =()=>{

}
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex}/>
      <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.ScrollViewFlex}
      >
      <View style={styles.HeaaderContainer}>
        <TouchableOpacity onPress={()=>{
          navigation.pop();
        }}>
          <GradientBGIcon 
           name="arrow-back"
           color={COLORS.primaryLightGreyHex}
           size={FONTSIZE.size_16}
          />
          <Text style={styles.HeaderText}>Payments</Text>
          <View style={styles.EmptyView}/>
        </TouchableOpacity>
      </View>
      <View style={styles.PaymentOptionsContainer}>
        <TouchableOpacity onPress={
          ()=>{
            setPaymentMode('Credit Card')
          }
        }>
          <View style={[styles.CreditCardContainer,
          {
            borderColor: 
            paymentMode== 'Credit Card' ?
            COLORS.primaryOrangeHex
            :COLORS.primaryGreyHex
          }
          ]}>
            <Text style={styles.CreditCardTitle}>Credit Card</Text>
            <View style={styles.CreditCardBG}>
               <LinearGradient
               start={{x: 0, y: 0}}
               end={{x: 0, y: 0}}
               style={styles.LinearGradientStyle}
               colors={[
                COLORS.primaryGreyHex,
                COLORS.primaryBlackHex
               ]}
               >
                <View style={styles.CreditCardRow}>
                   <CustomIcon
                   name="Chip"
                   size={FONTSIZE.size_20*2}
                   color={COLORS.primaryOrangeHex}
                   />
                   <CustomIcon
                   name="visa"
                   size={FONTSIZE.size_30*2}
                   color={COLORS.primaryWhiteHex}
                   />
                </View>
                <View style={styles.CreditCardNumberContainer}>
                 <Text style={styles.CrediCardNumber}>4498</Text>
                 <Text style={styles.CrediCardNumber}>3039</Text>
                 <Text style={styles.CrediCardNumber}>0890</Text>
                 <Text style={styles.CrediCardNumber}>2022</Text>
                </View>
                <View style={styles.CreditCardRow}>
                    <View>
                      <Text style={styles.CreditCardNameSubtitle}>Card Holder</Text>
                      <Text style={styles.CreditCardNameTitle}>Ruta Renzi</Text>
                    </View>
                    <View>
                      <Text style={styles.CreditCardNameSubtitle}>Expiry Date</Text>
                      <Text style={styles.CreditCardNameTitle}>02/30</Text>
                    </View>
                </View>
               </LinearGradient>
            </View>
          </View>
        </TouchableOpacity>
        {PaymentList.map((data:any)=>(
          <TouchableOpacity key={data.name}
          onPress={()=>{
            setPaymentMode(data.name)
          }}
          >
            <PaymentMethod  
            paymentMode={paymentMode} 
            name={data.name} 
            icon={data.icon} 
            isIcon={data.isIcon}/>
          </TouchableOpacity>
        ))}
      </View>
      </ScrollView>
  <PaymentFooter 
   buttonTitle={`Pay with ${paymentMode}`}
   price={{price: route.params.amount, currency: '$'}}
   buttonPressHandler={buttonPressHandler}
  />
    </View>
  )
}
const styles = StyleSheet.create({
  ScreenContainer: {
    flex:1,
    backgroundColor: COLORS.primaryBlackHex
  },
  ScrollViewFlex: {
  flexGrow:1
  },
  HeaaderContainer:{
  paddingHorizontal: SPACING.space_24,
  paddingVertical: SPACING.space_15,
  flexDirection: 'row',
  alignItems:'center',
  justifyContent: 'space-between',
  },
  HeaderText: {
   fontFamily:FONTFAMILY.poppins_semibold,
   fontSize: FONTSIZE.size_20,
   color: COLORS.primaryWhiteHex
  },
  EmptyView: {
   height: SPACING.space_36,
   width: SPACING.space_36
  },
  PaymentOptionsContainer: {
   padding: SPACING.space_15,
   gap: SPACING.space_15
  },
  CreditCardContainer: {
    padding: SPACING.space_10,
    gap: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_15 *2,
    borderWidth: 3, 
  },
  CreditCardTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_14,
    color:COLORS.primaryWhiteHex,
    marginLeft: SPACING.space_10,

  },
  CreditCardBG: {
    backgroundColor: COLORS.primaryGreyHex,
    borderRadius: BORDERRADIUS.radius_20,
  },
  LinearGradientStyle: {
    borderRadius: BORDERRADIUS.radius_25,
    gap:SPACING.space_36,
    paddingHorizontal: SPACING.space_15,
    paddingVertical: SPACING.space_10
  },
  CreditCardRow: {},
  CreditCardNumberContainer: {},
  CrediCardNumber: {},
  CreditCardNameSubtitle:{},
  CreditCardNameTitle: {}
})

export default PaymentScreen
