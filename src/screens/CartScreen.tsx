import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import useStore from '../store/store'

const CartScreen = () => {
  const cartList = useStore((state:any)=>state.CartList)
  console.log(cartList.length)
  return (
    <View>
      <Text>CartScreen</Text>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({})
