import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BlurView } from 'expo-blur'
import React from 'react'
import { StyleSheet } from 'react-native'

import CustomIcon from '../components/CustomIcon'
import CartScreen from '../screens/CartScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import HomeScreen from '../screens/Homescreen'
import OrderHistoryScreen from '../screens/OrderHistoryScreen'
import { COLORS } from '../theme/theme'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: () => {
          return <BlurView style={styles.blur} intensity={50} />
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <CustomIcon
              name="home"
              size={25}
              color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
            />
          )
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <CustomIcon
              name="cart"
              size={25}
              color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
            />
          )
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <CustomIcon
              name="heart-sharp"
              size={25}
              color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
            />
          )
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="History"
        component={OrderHistoryScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <CustomIcon
              name="notifications"
              size={25}
              color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
            />
          )
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent'
  },
  blur: {
    position: 'absolute',
    right: 0,
    left: 0,
    top: 0,
    bottom: 0
  }
})
export default TabNavigator
