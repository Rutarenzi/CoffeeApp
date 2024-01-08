import AsyncStorage from '@react-native-async-storage/async-storage'
//
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import BeansData from '../data/BeansData'
import CoffeeData from '../data/CoffeeData'

const useStore = create(
  persist(
    (set, get) => ({
      CoffeeList: CoffeeData,
      BeanList: BeansData,
      CartPrice: 0,
      FavoriteList: [],
      CartList: [],
      OrderHistoryList: []
    }),
    {
      name: 'Coffee-App',
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
)

export default useStore
