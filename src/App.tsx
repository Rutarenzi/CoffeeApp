import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFonts } from 'expo-font'
import { useCallback } from 'react'

import TabNavigator from './navigators/TabNavigator'
import DetailsScreen from './screens/DetailsScreen'
import PaymentScreen from './screens/PaymentScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Black': require('../src/assets/fonts/Poppins-Black.ttf'),
    'Poppins-Bold': require('../src/assets/fonts/Poppins-Bold.ttf'),
    'Poppins-ExtraBold': require('../src/assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-ExtraBight': require('../src/assets/fonts/Poppins-ExtraLight.ttf'),
    'Poppins-Light': require('../src/assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('../src/assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('../src/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('../src/assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Thin': require('../src/assets/fonts/Poppins-Thin.ttf')
  })
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // await SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Tab"
          component={TabNavigator}
          options={{ animation: 'slide_from_bottom' }}
        ></Stack.Screen>
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ animation: 'slide_from_bottom' }}
        ></Stack.Screen>
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{ animation: 'slide_from_bottom' }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
