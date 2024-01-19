import { ImageProps,Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { BORDERRADIUS, COLORS, SPACING } from '../theme/theme';
interface OrderItemCard{
    type:string; 
    name:string;
    imagelink_square:ImageProps;
    special_ingredient:string;
    prices:any;
    ItemPrice:string;
}
const OrderItemCard:React.FC<OrderItemCard> = ({
    type,
    name,
    imagelink_square,
    special_ingredient,
    prices,
    ItemPrice,
}) => {
  return (
    <LinearGradient 
    start={{x:0,y:0}}
    end={{x:1,y:1}}
    colors={[COLORS.primaryGreyHex,COLORS.primaryBlackHex]}
    style={styles.CardLinearGradient}
    >
   <View style={styles.CardInfoContainer}>
    <View style={styles.CardImageInfoContainer}>
        <Image
        source={imagelink_square}
        style={styles.Image}
        />
        <View>
            <Text style={styles.CardTitle}>{name}</Text>
            <Text style={styles.CardSubTitle}>{special_ingredient}</Text>
        </View>
    </View>
    <View>
        <Text style={styles.CardCurrency}>
          $  <Text style={styles.CardPrice}>{ItemPrice}</Text>
        </Text>
    </View>
   </View>
    </LinearGradient>
  )
}
const styles = StyleSheet.create({
    CardLinearGradient: {
        gap:SPACING.space_20,
        padding: SPACING.space_20,
        borderRadius: BORDERRADIUS.radius_25,
    },
    CardInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    CardImageInfoContainer: {
        flexDirection: 'row',
        gap: SPACING.space_20,
        alignItems: 'center'
    },
    Image: {
        height:90,
        width:90,
        borderRadius: BORDERRADIUS.radius_15
    },
    CardTitle:{},
    CardSubTitle:{},
    CardCurrency: {},
    CardPrice: {}
})
export default OrderItemCard

