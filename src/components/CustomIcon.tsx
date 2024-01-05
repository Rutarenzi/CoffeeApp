import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View } from 'react-native';


interface CustomIconProps {
   name:any;
   size:number;
   color: string;

}
const CustomIcon :React.FC<CustomIconProps>=({name,size,color})=>{
    return(
      <View>
        <Ionicons name={name}  size={size}  color={color}/>
      </View>
    )
}
export default CustomIcon