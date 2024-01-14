import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import React from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import CartItem from '../components/CartItem'
import FavoritesItemCard from '../components/FavoritesItemCard'
import HeaderBar from '../components/HeaderBar'
import useStore from '../store/store'
import { COLORS } from '../theme/theme'

const FavoritesScreen = ({ navigation, route }: any) => {
  const FavouriteList = useStore((state: any) => state.FavoritesList)
  const tabBarHeight = useBottomTabBarHeight()
  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList)
  const deleteFromFavoriteList = useStore((state: any) => state.deleteFromFavoriteList)
  const ToggleFavourite = (favourite: boolean, type: string, id: string) => {
    favourite ? deleteFromFavoriteList(type, id) : addToFavoriteList(type, id)
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
            <HeaderBar title="Favourites" />
            {/* {cartList.length == 0 ? <EmptyListAnimation title="Cart is empty"/>:<EmptyListAnimation title="Cart is empty"/>} */}
            <View style={styles.ListItemContainer}>
              {FavouriteList.map((data: any) => (
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
                  <FavoritesItemCard
                    id={data.id}
                    imagelink_portrait={data.imagelink_portrait}
                    name={data.name}
                    special_ingredient={data.special_ingredient}
                    type={data.type}
                    ingredients={data.ingredients}
                    average_rating={data.average_rating}
                    ratings_count={data.ratings_count}
                    roasted={data.roasted}
                    description={data.description}
                    favourite={data.favourite}
                    ToggleFavouriteItem={ToggleFavourite}
                  />
                </TouchableOpacity>
              ))}
            </View>
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

export default FavoritesScreen
