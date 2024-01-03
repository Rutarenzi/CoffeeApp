import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import TabNavigator from "./navigators/TabNavigator";
import DetailsScreen from './screens/DetailsScreen';
import PaymentScreen from './screens/PaymentScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
         name="Tab" 
         component={TabNavigator}
         options={{animation: 'slide_from_bottom'}}
         ></Stack.Screen>
        <Stack.Screen
         name="Details" 
         component={DetailsScreen}
         options={{animation: 'slide_from_bottom'}}
         ></Stack.Screen>
         <Stack.Screen
         name="Payment" 
         component={PaymentScreen}
         options={{animation: 'slide_from_bottom'}}
         ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

