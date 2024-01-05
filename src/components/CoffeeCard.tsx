import { Dimensions, ImageBackground, ImageProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from '../theme/theme';
import CustomIcon from './CustomIcon';
import BGIcon from './BGIcon';

const CARD_WIDTH = Dimensions.get('window').width * 0.32;

interface CoffeeCardProps {
 id: string;
 index: string;
 type: string;
 rosted: string;
 imagelink_square: ImageProps;
 name : string;
 special_ingredient: string;
 average_rating: number;
 price: any;
 buttonPressHandler: any
}

const CoffeeCard:React.FC<CoffeeCardProps> = ({
    id,
    index,
    type,
    rosted,
    imagelink_square,
    name,
    special_ingredient,
    average_rating,
    price,
    buttonPressHandler
}) => {
    console.log(price)
  return (
    <LinearGradient
    start={{ x:0,y:0 }}
    end={{x: 1, y:1}}
    style={styles.CardLinearGradientContainer}
    colors={[COLORS.primaryGreyHex,COLORS.primaryBlackHex]}
    >
    <ImageBackground 
    source={imagelink_square}
    style={styles.CardImage}
    resizeMode="cover"
    >
        <View style={styles.CartRatingContainer}>
            <CustomIcon 
            name='star' 
            color={COLORS.primaryOrangeHex}
            size={FONTSIZE.size_18}
            />
            <Text style={styles.CardRatingText}>{average_rating}</Text>
        </View>
    </ImageBackground>
    <Text>{name}</Text>
    <Text>{special_ingredient}</Text>
    <View style={styles.CardFooterRow}>
        <Text>
            $<Text>{price}</Text>
        </Text>
        <TouchableOpacity>
            <BGIcon 
            name='add'
            color={COLORS.primaryWhiteHex}
            BGColor={COLORS.primaryOrangeHex}
            size={FONTSIZE.size_10}
            />
        </TouchableOpacity>
    </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    CardLinearGradientContainer:{},
    CardImage:{
        width: CARD_WIDTH,
        height: CARD_WIDTH,
        borderRadius: BORDERRADIUS.radius_20,
        marginBottom: SPACING.space_15,
        overflow: 'hidden'
    },
    CartRatingContainer:{},
    CardFooterRow: {

    },
    CardRatingText: {

    }
})

export default CoffeeCard

