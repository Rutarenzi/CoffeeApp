import React from 'react'
import { StyleSheet } from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import HomeScreen from '../screens/Homescreen';
import CartScreen from '../screens/CartScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import { COLORS } from '../theme/theme';
import { BlurView } from 'expo-blur';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle:styles.tabBarStyle,
        tabBarBackground: ()=>{
            return <BlurView style={styles.blur} intensity={100}/>;
        }
        }}>
        <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
        <Tab.Screen name="Cart" component={CartScreen}></Tab.Screen>
        <Tab.Screen name="Favorites" component={FavoritesScreen}></Tab.Screen>
        <Tab.Screen name="History" component={OrderHistoryScreen}></Tab.Screen>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
   tabBarStyle:{
    height: 80,
    position:'absolute',
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

