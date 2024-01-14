import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import React, { useEffect } from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import CartItem from '../components/CartItem'
import EmptyListAnimation from '../components/EmptyListAnimation'
import HeaderBar from '../components/HeaderBar'
import PaymentFooter from '../components/PaymentFooter'
import useStore from '../store/store'
import { COLORS } from '../theme/theme'
const CartScreen = ({ navigation, route }: any) => {
  const cartList = useStore((state: any) => state.CartList)
  const clearStore = useStore((state: any) => state.clearStore)
  // useEffect(()=>{
  //   const v= async()=>{
  //     await clearStore()
  //   }
  //   v()
  // },[])
  const cartPrice = useStore((state: any) => state.CartPrice)
  const incrementCartItemQuantity = useStore((state: any) => state.incrementCartItemQuantity)
  const decrementCartItemQuantity = useStore((state: any) => state.decrementCartItemQuantity)
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice)
  const tabBarHeight = useBottomTabBarHeight()
  const buttonPressHandler = () => {
    navigation.push('Payment', { amount: cartPrice })
  }
  const incrementCartItemQuantityHandler = (id: string, size: string) => {
    incrementCartItemQuantity(id, size)
    calculateCartPrice()
  }
  const decrementCartItemQuantityHandler = (id: string, size: string) => {
    decrementCartItemQuantity(id, size)
    calculateCartPrice()
  }
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}
      >
        <View style={[styles.ScrollViewInnerView, { marginBottom: tabBarHeight }]}>
          <View style={styles.ItemContainer}>
            <HeaderBar title="Cart" />
            {/* {cartList.length == 0 ? <EmptyListAnimation title="Cart is empty"/>:<EmptyListAnimation title="Cart is empty"/>} */}
            <View style={styles.ListItemContainer}>
              {cartList.map((data: any) => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.push('Details', {
                      index: data.index,
                      id: data.id,
                      type: data.type
                    })
                  }}
                  key={data.id}
                >
                  <CartItem
                    id={data.id}
                    name={data.name}
                    imagelink_square={data.imagelink_square}
                    special_ingredient={data.special_ingredient}
                    roasted={data.roasted}
                    prices={data.prices}
                    incrementCartItemQuantityHandler={incrementCartItemQuantityHandler}
                    decrementCartItemQuantityHandler={decrementCartItemQuantityHandler}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>
          {cartList.length != 0 ? (
            <PaymentFooter
              price={{ price: cartPrice, currency: '$' }}
              buttonPressHandler={buttonPressHandler}
              buttonTitle="Pay"
            />
          ) : (
            ''
          )}
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
    flexGrow: 1
  },
  ScrollViewInnerView: {
    flex: 1,
    justifyContent: 'space-between'
  },
  ItemContainer: {
    flex: 1
  },
  ListItemContainer: {}
})
export default CartScreen
