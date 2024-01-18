import Lottie from 'lottie-react-native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
interface EmptyListAnimation {
  title: string
}
const EmptyListAnimation: React.FC<EmptyListAnimation> = ({ title }) => {
  return (
    <View style={styles.EmptyCardContainer}>
      {/* <Lottie
      style={styles.LottieStyle} 
      source={require('../lottie/coffeecup.json')}
      autoPlay
      loop
      /> */}
      <Text>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  EmptyCardContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  LottieStyle: {
    height: 300
  }
})
export default EmptyListAnimation
