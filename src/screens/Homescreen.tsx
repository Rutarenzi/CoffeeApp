import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import useStore from "../store/store";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { COLORS, FONTFAMILY, SPACING } from '../theme/theme';
import HeaderBar from '../components/HeaderBar';

const getCategoriesFromData =(data: any) =>{
  let temp: any = {};
  for(let i= 0; i < data.length; i++){
    if(temp[data[i].name]== undefined){
      temp[data[i].name] = 1;
    }else{
      temp[data[i].name]++
    }
  }
  let categories = Object.keys(temp);
  categories.unshift('All')
  return categories
}
const getCoffeList = (category: any, data: any)=>{
 if(category =='all'){
  return data
 }else{
  let coffeelist = data.filter((item:any)=> item.name ==category)
  return coffeelist
 }
}


const HomeScreen = () => {
const CoffeeList = useStore((state:any)=>state.CoffeeList);
const BeanList = useStore((state : any)=>state.BeanList)
const [categories,setCategories] = useState(getCategoriesFromData(CoffeeList));
const [searchText,setSearchText] = useState(undefined);
const [categoryIndex, setCategoryIndex] = useState({
  index: 0,
  category: categories[0]
})
const [sortedCoffee,setSortedCoffee] = useState(
  getCoffeList(categoryIndex.category,CoffeeList)
);
const tabBarHeight = useBottomTabBarHeight()
  return (
   
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewFlex}
      >
        <HeaderBar title="Renzi"/>
        <Text style={styles.screenTitle}>Find the best{'\n'} Coffee for you</Text>
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
    flexGrow: 1,
  },
  screenTitle: {
    fontSize: SPACING.space_28,
    color:COLORS.primaryWhiteHex,
    paddingLeft: SPACING.space_30
    // fontFamily: FONTFAMILY.poppins_semibold
  }
})

export default HomeScreen

