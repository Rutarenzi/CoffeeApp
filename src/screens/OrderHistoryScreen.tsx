import React from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import useStore from '../store/store';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { COLORS, SPACING } from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import OrderHistoryCard from '../components/OrderHistoryCard';

const OrderHistoryScreen = () => {
const OrderHistoryList = useStore((state: any)=>state.OrderHistoryList)
const tabBarHeight = useBottomTabBarHeight();
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex}/>
      <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.ScrollViewFlex}
      >
    <View style={[styles.ScrollViewInnerView,{marginBottom:tabBarHeight}]}>
      <View style={styles.ItemContainer}>
      <HeaderBar title="Order History" />
      {OrderHistoryList.length == 0 ?(<></>):(
        <View style={styles.ListItemContainer}>
          {OrderHistoryList.map((data: any,index:any)=>(
            <OrderHistoryCard 
            key={index.toString()}
            navigationHandler={()=>{}}
            CartItem={data.CartList}
            CartListPrice={data.CartListPrice}
            OrderDate={data.OrderDate}
            />
          ))}
        </View>
      )}
      </View>
    </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  ScrollViewInnerView: {
    flex: 1,
    justifyContent: 'space-between'
  },
  ItemContainer: {
    flex: 1
  },
  ListItemContainer: {
    paddingHorizontal:SPACING.space_20,
    gap: SPACING.space_30
  }
})
export default OrderHistoryScreen
