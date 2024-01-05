import { 
  FlatList,
  ScrollView, 
  StatusBar, 
  StyleSheet, 
  Text, 
  TextInput,
   TouchableOpacity, 
   View } from 'react-native'
import React,{useState} from 'react'
import useStore from "../store/store";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import CustomIcon from '../components/CustomIcon';
import CoffeeCard from '../components/CoffeeCard';

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
const getCoffeeList = (category: any, data: any)=>{
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
const [searchText,setSearchText] = useState('');
const [categoryIndex, setCategoryIndex] = useState({
  index: 1,
  category: categories[1]
})
const [sortedCoffee,setSortedCoffee] = useState(
  getCoffeeList(categoryIndex.category,CoffeeList)
);
const tabBarHeight = useBottomTabBarHeight()
  return (
   
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewFlex}
      > 
      {/* Header */}
        <HeaderBar title="Rut Coffee"/>
        <Text style={styles.screenTitle}>Find the best{'\n'}Coffee for you</Text>
        {/* search */}
        <View style={styles.InputContainerComponent}>
          <TouchableOpacity onPress={()=>{}} style={styles.InputIcon}>
            <CustomIcon 
            name="search" 
            size={FONTSIZE.size_18} 
            color={
              searchText.length >0 ? 
              COLORS.primaryOrangeHex
              :COLORS.primaryLightGreyHex
            } />
          </TouchableOpacity>
          <TextInput 
          placeholder="Find Coffee..." 
          value={searchText}
          onChangeText={(texts:any) =>setSearchText(texts)}
          placeholderTextColor={COLORS.primaryLightGreyHex}
          style={styles.TextInputContainer}
          />
          {/* category */}
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.CategoryScrollViewStyle}
          >
           {categories.map((data,index)=>(
               <View key={index.toString()} style={styles.CategoryScrollViewContainer}>
                <TouchableOpacity style={styles.CategoryScrollViewItem} 
                onPress={()=>{
                  setCategoryIndex({index:index,category: categories[index]})
                  setSortedCoffee([getCoffeeList(categories[index],CoffeeList)])
                }}>
                  <Text style={[styles.CategoryText,categoryIndex.index == index ? {color:COLORS.primaryOrangeHex}:{}]}>{data}</Text>
                  {categoryIndex.index  == index ?
                   (<View style={styles.ActiveCategory}/>)
                   :(<></>)}
                </TouchableOpacity>
               </View>
           ))}
          </ScrollView>
          {/* Coffee flatList */}
          <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={sortedCoffee}
          contentContainerStyle={styles.FlatListContainer}
          keyExtractor={item=>item.id}
          renderItem={({item})=>{
            return <TouchableOpacity>
              <CoffeeCard 
              id={item.id} 
              index={item.index} 
              type={item.type} 
              rosted={item.rosted} 
              imagelink_square={item.imagelink_square} 
              name={item.name} 
              special_ingredient={item.special_ingredient} 
              average_rating={item.average_rating} 
              price={item.price[1]} 
              buttonPressHandler={undefined}              
              />
            </TouchableOpacity>
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
    flexGrow: 1,
  },
  screenTitle: {
    fontSize: SPACING.space_28,
    color:COLORS.primaryWhiteHex,
    paddingLeft: SPACING.space_30
    // fontFamily: FONTFAMILY.poppins_semibold
  },
  TextInputContainer: {
    flex: 1,
   height: SPACING.space_20 * 2,
  //  fontFamily: FONTFAMILY.poppins_medium,
   fontSize: FONTSIZE.size_14,
   color: COLORS.primaryWhiteHex
  },
  InputContainerComponent:{
    flexDirection:'row',
    margin: SPACING.space_30,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.primaryDarkGreyHex,
    alignItems: 'center'
  },
  CategoryScrollViewStyle:{
    paddingHorizontal: SPACING.space_20,
    marginBottom: SPACING.space_10,
  },
  CategoryScrollViewContainer: {
    paddingHorizontal: SPACING.space_15,

  },
  CategoryScrollViewItem: {
    alignItems:'center'
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
  InputIcon:{
    marginHorizontal: SPACING.space_20
  },
  FlatListContainer:{
    gap: SPACING.space_20,
    paddingVertical:SPACING.space_30,
    paddingHorizontal: SPACING.space_30
  }
})

export default HomeScreen

