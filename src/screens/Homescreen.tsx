import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import React, { useRef, useState } from 'react'
import {
  Dimensions,
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

import CoffeeCard from '../components/CoffeeCard'
import CustomIcon from '../components/CustomIcon'
import HeaderBar from '../components/HeaderBar'
import useStore from '../store/store'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'

const getCategoriesFromData = (data: any) => {
  const temp: any = {}
  for (let i = 0; i < data.length; i++) {
    if (temp[data[i].name] == undefined) {
      temp[data[i].name] = 1
    } else {
      temp[data[i].name]++
    }
  }
  const categories = Object.keys(temp)
  categories.unshift('All')
  return categories
}
const getCoffeeList = (category: any, data: any) => {
  if (category == 'All') {
    return data
  } else {
    const coffeelist = data.filter((item: any) => item.name == category)
    return coffeelist
  }
}

const HomeScreen = ({ navigation }: any) => {
  const CoffeeList = useStore((state: any) => state.CoffeeList)
  const BeanList = useStore((state: any) => state.BeanList)
  const [categories, setCategories] = useState(getCategoriesFromData(CoffeeList))
  const [searchText, setSearchText] = useState('')
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0]
  })
  const [sortedCoffee, setSortedCoffee] = useState(
    getCoffeeList(categoryIndex.category, CoffeeList)
  )
  const ListRef: any = useRef<FlatList>()
  const tabBarHeight = useBottomTabBarHeight()

  const searchCoffee = (search: string) => {
    if (search != '') {
      ListRef?.current?.scrollToOffset({
        animated: true,
        offset: 0
      })
      setCategoryIndex({
        index: 0,
        category: categories[0]
      })
      setSortedCoffee([
        ...CoffeeList.filter((item: any) => {
          return item.name.toLowerCase().includes(search.toLowerCase())
        })
      ])
    }
  }
  const resetSearchCoffee = () => {
    ListRef?.current?.scrollToOffset({
      animated: true,
      offset: 0
    })
    setCategoryIndex({ index: 0, category: categories[0] })
    setSortedCoffee([...CoffeeList])
    setSearchText('')
  }
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}
      >
        {/* Header */}
        <HeaderBar title="Rut Coffee" />
        <Text style={styles.screenTitle}>Find the best{'\n'}Coffee for you</Text>
        {/* search */}
        <View style={styles.InputContainerComponent}>
          <TouchableOpacity
            onPress={() => {
              searchCoffee(searchText)
            }}
            style={styles.InputIcon}
          >
            <CustomIcon
              name="search"
              size={FONTSIZE.size_18}
              color={searchText.length > 0 ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Find Coffee..."
            value={searchText}
            onChangeText={(texts: any) => {
              setSearchText(texts)
              searchCoffee(texts)
            }}
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style={styles.TextInputContainer}
          />
          {searchText.length > 0 ? (
            <TouchableOpacity
              onPress={() => {
                resetSearchCoffee()
              }}
              style={styles.InputIcon}
            >
              <CustomIcon name="close" size={FONTSIZE.size_16} color={COLORS.primaryLightGreyHex} />
            </TouchableOpacity>
          ) : (
            <></>
          )}
          {/* category */}
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.CategoryScrollViewStyle}
        >
          {categories.map((data, index) => (
            <View key={index.toString()} style={styles.CategoryScrollViewContainer}>
              <TouchableOpacity
                style={styles.CategoryScrollViewItem}
                onPress={() => {
                  ListRef?.current?.scrollToOffset({
                    animated: true,
                    offset: 0
                  }),
                    setCategoryIndex({ index, category: categories[index] }),
                    setSortedCoffee([...getCoffeeList(categories[index], CoffeeList)])
                }}
              >
                <Text
                  style={[
                    styles.CategoryText,
                    categoryIndex.index == index ? { color: COLORS.primaryOrangeHex } : {}
                  ]}
                >
                  {data}
                </Text>
                {categoryIndex.index == index ? <View style={styles.ActiveCategory} /> : <></>}
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        {/* Coffee flatList */}
        <FlatList
          ref={ListRef}
          ListEmptyComponent={
            <View style={styles.EmptyListContainer}>
              <Text style={styles.CategoryText}>No available Coffee</Text>
            </View>
          }
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={sortedCoffee}
          contentContainerStyle={styles.FlatListContainer}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.push('Details')
                }}
              >
                <CoffeeCard
                  id={item.id}
                  index={item.index}
                  type={item.type}
                  rosted={item.rosted}
                  imagelink_square={item.imagelink_square}
                  name={item.name}
                  special_ingredient={item.special_ingredient}
                  average_rating={item.average_rating}
                  price={item.prices[2]}
                  buttonPressHandler={undefined}
                />
              </TouchableOpacity>
            )
          }}
        />
        {/* Coffee bean */}
        <Text style={styles.CoffeeBeansTitle}>Coffee Beans</Text>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={BeanList}
          contentContainerStyle={[styles.FlatListContainer, { marginBottom: tabBarHeight }]}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.push('Details')
                }}
              >
                <CoffeeCard
                  id={item.id}
                  index={item.index}
                  type={item.type}
                  rosted={item.rosted}
                  imagelink_square={item.imagelink_square}
                  name={item.name}
                  special_ingredient={item.special_ingredient}
                  average_rating={item.average_rating}
                  price={item.prices[2]}
                  buttonPressHandler={undefined}
                />
              </TouchableOpacity>
            )
          }}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  ScreenContainer: {
    backgroundColor: COLORS.primaryBlackHex,
    flex: 1
  },
  scrollViewFlex: {
    flexGrow: 1
  },
  screenTitle: {
    fontSize: SPACING.space_28,
    color: COLORS.primaryWhiteHex,
    paddingLeft: SPACING.space_30,
    fontFamily: FONTFAMILY.poppins_semibold
  },
  TextInputContainer: {
    flex: 1,
    height: SPACING.space_20 * 2,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex
  },
  InputContainerComponent: {
    flexDirection: 'row',
    margin: SPACING.space_30,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.primaryDarkGreyHex,
    alignItems: 'center'
  },
  CategoryScrollViewStyle: {
    paddingHorizontal: SPACING.space_20,
    marginBottom: SPACING.space_10
  },
  CategoryScrollViewContainer: {
    paddingHorizontal: SPACING.space_15
  },
  CategoryScrollViewItem: {
    alignItems: 'center'
  },
  ActiveCategory: {
    height: SPACING.space_10,
    width: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: COLORS.primaryOrangeHex
  },
  CategoryText: {
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryLightGreyHex,
    marginBottom: SPACING.space_4
  },
  InputIcon: {
    marginHorizontal: SPACING.space_20
  },
  FlatListContainer: {
    gap: SPACING.space_20,
    paddingVertical: SPACING.space_30,
    paddingHorizontal: SPACING.space_30
  },
  EmptyListContainer: {
    width: Dimensions.get('window').width - SPACING.space_30 * 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.space_36 * 3.6
  },
  CoffeeBeansTitle: {
    fontSize: FONTSIZE.size_18,
    marginLeft: SPACING.space_30,
    marginTop: SPACING.space_20,
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.secondaryLightGreyHex
  }
})

export default HomeScreen
